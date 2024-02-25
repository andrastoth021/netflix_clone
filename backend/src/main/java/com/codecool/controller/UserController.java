package com.codecool.controller;

import com.codecool.dto.RegisterDTO;
import com.codecool.dto.SignInDTO;
import com.codecool.entity.UserEntity;
import com.codecool.model.JwtResponse;
import com.codecool.security.jwt.JwtUtils;
import com.codecool.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {
    private final UserService userService;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO registerDTO) {
        return userService.registerUser(registerDTO);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody SignInDTO signInDTO) {
        return userService.authenticateUser(signInDTO);
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public String me() { // Test endpoint
        return userService.me();
    }
}
