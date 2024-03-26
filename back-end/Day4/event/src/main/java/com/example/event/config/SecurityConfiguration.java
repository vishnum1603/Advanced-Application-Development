package com.example.event.config;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.event.enumerate.Permission;
import com.example.event.enumerate.Role;
import com.example.event.util.MyConstant;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration{
        private final AuthenticationProvider authenticationProvider ;
        private final JwtAuthenticationFilter jwtAuthFilter ;

        @Bean
        public org.springframework.security.web.SecurityFilterChain SecurityFilterChain(HttpSecurity http) throws Exception{
                http
                .csrf(csrf -> csrf
                .disable())
                .authorizeHttpRequests(authorize -> authorize.requestMatchers(MyConstant.WHITELIST_URL).permitAll()


                .requestMatchers("/api/event/user/**").hasAnyRole(Role.ADMIN.name(), Role.USER.name())


                .requestMatchers(GET, "/api/event/user/**").hasAnyAuthority(Permission.ADMIN_CREATE.name(), Permission.USER_CREATE.name())
                .requestMatchers(POST, "/api/event/user/**").hasAnyAuthority(Permission.ADMIN_READ.name(), Permission.USER_READ.name())
                .requestMatchers(PUT, "/api/event/user/**").hasAnyAuthority(Permission.ADMIN_UPDATE.name(), Permission.USER_UPDATE.name())
                .requestMatchers(DELETE, "/api/event/user/**").hasAnyAuthority(Permission.ADMIN_DELETE.name(), Permission.USER_DELETE.name())

                .requestMatchers("/api/airjio/event/**").hasAnyRole(Role.ADMIN.name())

                .requestMatchers(GET, "/api/event/admin/**").hasAnyAuthority(Permission.ADMIN_CREATE.name())
                .requestMatchers(POST, "/api/event/admin/**").hasAnyAuthority(Permission.ADMIN_READ.name())
                .requestMatchers(PUT, "/api/event/admin/**").hasAnyAuthority(Permission.ADMIN_UPDATE.name())
                .requestMatchers(DELETE, "/api/event/admin/**").hasAnyAuthority(Permission.ADMIN_DELETE.name())


                .anyRequest()
                .authenticated())
        .sessionManagement(management -> management
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);   
        return http.build();
    }
}

