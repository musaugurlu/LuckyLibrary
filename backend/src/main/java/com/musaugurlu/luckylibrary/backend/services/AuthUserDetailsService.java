/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 7:49 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Patron;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AuthUserDetailsService implements UserDetailsService {
    @Autowired
    private PatronService patronService;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Patron> patron = patronService.findByEmail(email);
        if (patron.isPresent()) {
            return  AuthUserDetails.build(patron.get());
        }
        throw new UsernameNotFoundException("Username could not found.");
    }
}
