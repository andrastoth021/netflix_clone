package com.codecool.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "registered at")
    private Timestamp registrationDate;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;

    private Role role;

    public UserEntity(String username, String email, String password, Role role) {
        this.registrationDate = new Timestamp(System.currentTimeMillis());
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
