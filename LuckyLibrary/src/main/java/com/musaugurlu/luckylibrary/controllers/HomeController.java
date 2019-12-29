/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 8:17 PM
 */

package com.musaugurlu.luckylibrary.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
    @GetMapping
    public String index() {
        return "index";
    }
}
