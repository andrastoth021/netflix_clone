package com.codecool.service;

import com.codecool.controller.UserController;
import com.codecool.dto.RegisterDTO;
import com.codecool.entity.Role;
import com.codecool.entity.UserEntity;
import com.codecool.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final RoleService roleService;
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserService(RoleService roleService, UserRepository userRepository, PasswordEncoder encoder) {
        this.roleService = roleService;
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    private void create(UserEntity user) {
        userRepository.save(user);
    }

    public ResponseEntity<?> registerUser(RegisterDTO registerDTO) {
        if (!registerDTO.password().equals(registerDTO.passwordRepeat())) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(
                    "The two passwords don't match!");
        }
        if (findByEmail(registerDTO.email()).isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(
                "The email address you've chosen is already registered!");
        }

        Role roles = roleService.findByName("ROLE_USER");
        UserEntity user = new UserEntity(registerDTO.username(), registerDTO.email(), encoder.encode(registerDTO.password()), Set.of(roles));
        create(user);
        logger.info("Registration successful! New user added with username: " + registerDTO.username());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public Optional<UserEntity> findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
