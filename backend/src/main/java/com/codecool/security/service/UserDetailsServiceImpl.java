package com.codecool.security.service;

import com.codecool.entity.Role;
import com.codecool.entity.UserEntity;
import com.codecool.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException(email));
        List<SimpleGrantedAuthority> roles = new ArrayList<>();

        for (Role role : userEntity.getRoles()) {
            roles.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new User(userEntity.getEmail(), userEntity.getPassword(), roles);
    }
}
