/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:03 PM
 */

package com.musaugurlu.luckylibrary.backend.controllers;

import com.musaugurlu.luckylibrary.backend.services.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    BookService bookService;

    @GetMapping
    public String index() {
        return "";
    }
}

