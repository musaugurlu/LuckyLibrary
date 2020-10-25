/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 10:35 PM
 */

package com.musaugurlu.luckylibrary.backend.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class AuthResponse {
    private final String TOKEN;
    private List<String> roles;

    public AuthResponse(String TOKEN, Collection<? extends GrantedAuthority> authorities) {
        this.TOKEN = TOKEN;
        this.roles = authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
    }

    public String getTOKEN() {
        return TOKEN;
    }

    public List<String> getRoles() {
        return roles;
    }
}
