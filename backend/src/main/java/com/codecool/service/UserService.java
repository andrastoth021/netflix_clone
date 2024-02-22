package com.codecool.service;

import com.codecool.entity.UserEntity;
import com.codecool.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void create(UserEntity user) {
        userRepository.save(user);
    }

    public Optional<UserEntity> findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
