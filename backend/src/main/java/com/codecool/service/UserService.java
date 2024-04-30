package com.codecool.service;

import com.codecool.controller.UserController;
import com.codecool.dto.ProfileResponse;
import com.codecool.dto.RegisterDTO;
import com.codecool.dto.SignInDTO;
import com.codecool.entity.user.Role;
import com.codecool.entity.user.UserEntity;
import com.codecool.exception.DuplicatedException;
import com.codecool.model.JwtResponse;
import com.codecool.repository.UserRepository;
import com.codecool.security.jwt.JwtUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final RoleService roleService;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final PasswordEncoder encoder;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserService(RoleService roleService, UserRepository userRepository, AuthenticationManager authenticationManager, JwtUtils jwtUtils, PasswordEncoder encoder) {
        this.roleService = roleService;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    private void create(UserEntity user) {
        userRepository.save(user);
    }

    private Optional<UserEntity> findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public void registerUser(RegisterDTO registerDTO) {
        if (!registerDTO.password().equals(registerDTO.passwordRepeat())) {
            throw new DuplicatedException("Passwords do not match. Please ensure both entries are identical.");
        }
        if (findByEmail(registerDTO.email()).isPresent()) {
            throw new DuplicatedException("The email address you've chosen is already registered!");
        }

        Role roles = roleService.findByName("ROLE_USER");
        UserEntity user = new UserEntity(registerDTO.username(), registerDTO.email(), encoder.encode(registerDTO.password()), Set.of(roles));
        create(user);
        logger.info("Registration successful! New user added with the following email address: " + registerDTO.email());
    }

    public ResponseEntity<?> authenticateUser(SignInDTO signInDTO) {
        try {
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(signInDTO.email(), signInDTO.password());
            Authentication authentication = authenticationManager.authenticate(auth);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtUtils.generateJwtToken(authentication);
            User userDetails = (User) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .toList();

            UserEntity userEntity = findByEmail(signInDTO.email()).orElseThrow(() -> new UsernameNotFoundException(signInDTO.email()));

            logger.info("User called " + userEntity.getUsername() + " signed in successfully!");
            return ResponseEntity
                    .ok(new JwtResponse(jwt, userEntity.getUsername(), userEntity.getEmail(), roles));
        } catch (Exception e) {
            throw new DuplicatedException("The username and password you entered do not match. Please check your credentials and try again.");
        }
    }

    public ResponseEntity<ProfileResponse> getProfileData() {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        UserEntity userEntity = findByEmail(user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(user.getUsername()));

        return ResponseEntity.status(HttpStatus.OK)
            .body(new ProfileResponse(
                userEntity.getRegistrationDate(),
                userEntity.getUsername(),
                userEntity.getEmail())
            );
    }
}
