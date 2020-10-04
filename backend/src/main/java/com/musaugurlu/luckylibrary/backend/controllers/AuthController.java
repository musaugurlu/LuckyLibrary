/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 7:45 PM
 */

package com.musaugurlu.luckylibrary.backend.controllers;

import com.musaugurlu.luckylibrary.backend.configurations.JWTUtil;
import com.musaugurlu.luckylibrary.backend.models.AuthRequest;
import com.musaugurlu.luckylibrary.backend.models.AuthResponse;
import com.musaugurlu.luckylibrary.backend.services.AuthUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    @Autowired
    private AuthUserDetailsService authUserDetailsService;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/auth/login")
    public ResponseEntity<?> createAuthToken(@RequestBody AuthRequest request) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid username or password", e);
        } catch (InsufficientAuthenticationException e) {
            throw new Exception("Insufficient Authentication", e);
        } catch (InternalAuthenticationServiceException e) {
            throw new Exception("Internal Error", e);
        } catch (IllegalArgumentException e) {
            throw new Exception("Invalid Credentials", e);
        }

        final UserDetails userDetails = authUserDetailsService.loadUserByUsername(request.getEmail());
        final String token = jwtUtil.generateToken(userDetails);
        System.out.println("Token: " + token);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
