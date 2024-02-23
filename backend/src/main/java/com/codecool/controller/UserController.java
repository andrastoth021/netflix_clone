package com.codecool.controller;

import com.codecool.dto.RegisterDTO;
import com.codecool.dto.SignInDTO;
import com.codecool.entity.Role;
import com.codecool.entity.UserEntity;
import com.codecool.model.JwtResponse;
import com.codecool.security.jwt.JwtUtils;
import com.codecool.service.RoleService;
import com.codecool.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {
    private final UserService userService;
    private final RoleService roleService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final PasswordEncoder encoder;

    public UserController(UserService userService, RoleService roleService, AuthenticationManager authenticationManager, JwtUtils jwtUtils, PasswordEncoder encoder) {
        this.userService = userService;
        this.roleService = roleService;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.encoder = encoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDTO registerDTO) {
        if (userService.findByEmail(registerDTO.email()).isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(
                "The email address you've chosen is already registered!");
        }

        Role roles = roleService.findByName("ROLE_USER");
        UserEntity user = new UserEntity(registerDTO.username(), registerDTO.email(), encoder.encode(registerDTO.password()), Set.of(roles));
        userService.create(user);
        logger.info("Registration successful! New user added with username: " + registerDTO.username());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody SignInDTO loginRequest) {
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password());
        Authentication authentication = authenticationManager.authenticate(auth);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);
        User userDetails = (User) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        UserEntity userEntity = userService.findByEmail(loginRequest.email()).orElseThrow(() -> new UsernameNotFoundException(loginRequest.email()));

        logger.info("User called " + userEntity.getUsername() + " signed in successfully!");
        return ResponseEntity
                .ok(new JwtResponse(jwt, userEntity.getUsername(), roles));
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public String me() {
        User user = (User) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        UserEntity userEntity = userService.findByEmail(user.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException(user.getUsername()));

        return "Hello " + userEntity.getUsername();
    }
}
