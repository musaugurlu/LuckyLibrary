/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu
 */

package com.musaugurlu.luckylibrary;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(LuckylibraryApplication.class);
    }

}
