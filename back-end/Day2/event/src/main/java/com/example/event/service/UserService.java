package com.example.event.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.event.dto.request.AuthRequest;
import com.example.event.dto.request.UserRequest;
import com.example.event.dto.response.AuthRespose;
import com.example.event.enumerate.Role;
import com.example.event.model.User;
import com.example.event.repository.UserRepository;
import com.example.event.util.JwtService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepo ;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthRespose register(UserRequest request){
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNo(request.getPhoneNo())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepo.save(user);
        var jwtToken =  jwtService.generateToken(user);
        return AuthRespose.builder()
            .token(jwtToken)
            .build();
    }

    public AuthRespose  authenticate(AuthRequest request){
         authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken( 
                request.getEmail(),
                request.getPassword()
            )
         );
         var user = userRepo.findByEmail(request.getEmail())
                .orElseThrow();
                var jwtToken =  jwtService.generateToken(user);
                return AuthRespose.builder()
                    .token(jwtToken)
                    .role(user.getRole())
                    .build();
    }

}
