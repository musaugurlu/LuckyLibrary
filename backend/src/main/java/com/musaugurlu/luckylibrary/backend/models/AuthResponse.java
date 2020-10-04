/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 10:35 PM
 */

package com.musaugurlu.luckylibrary.backend.models;

public class AuthResponse {
    private final String TOKEN;

    public AuthResponse(String TOKEN) { this.TOKEN = TOKEN; }

    public String getTOKEN() {
        return TOKEN;
    }
}
