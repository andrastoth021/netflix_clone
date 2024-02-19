package com.codecool.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.UUID;

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

    private UUID uuid;

    @Column(name = "registered at")
    private Timestamp registrationDate;

    private String username;

    private String email;

    private String password;

    private boolean isAdmin;


    public UserEntity(UUID uuid, Timestamp registrationDate, String username, String email, String password, boolean isAdmin) {
        this.uuid = uuid;
        this.registrationDate = new Timestamp(System.currentTimeMillis());
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = false;
    }
}
