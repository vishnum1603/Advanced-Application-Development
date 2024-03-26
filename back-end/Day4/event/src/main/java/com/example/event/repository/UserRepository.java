package com.example.event.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.event.model.User;


public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
