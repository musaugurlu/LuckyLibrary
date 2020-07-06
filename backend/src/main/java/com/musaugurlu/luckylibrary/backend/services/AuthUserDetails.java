/*
 * Copyright (c) 2020. 
 * Author: Musa Ugurlu
 * Date: 7/5/20, 8:04 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.musaugurlu.luckylibrary.backend.models.Patron;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class AuthUserDetails implements UserDetails {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;
    private boolean isLocked;

    @JsonIgnore
    private String password;

    public AuthUserDetails(Long id, String email, Collection<? extends GrantedAuthority> authorities, boolean isLocked, String password) {
        this.id = id;
        this.email = email;
        this.authorities = authorities;
        this.isLocked = isLocked;
        this.password = password;
    }

    public static AuthUserDetails build(Patron patron) {
        List<GrantedAuthority> authorities = patron.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new AuthUserDetails(
                patron.getId(),
                patron.getEmail(),
                authorities,
                patron.isLocked(),
                patron.getPassword()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !isLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
