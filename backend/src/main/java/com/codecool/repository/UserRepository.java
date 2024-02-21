package com.codecool.repository;

import com.codecool.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity save(UserEntity user);

    Optional<UserEntity> findUserByName(String username);
}
