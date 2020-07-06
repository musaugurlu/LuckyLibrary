/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 10:35 PM
 */

package com.musaugurlu.luckylibrary.backend.models;

public class AuthResponse {
    private final String JWT;

    public AuthResponse(String JWT) {
        this.JWT = JWT;
    }

    public String getJWT() {
        return JWT;
    }
}
