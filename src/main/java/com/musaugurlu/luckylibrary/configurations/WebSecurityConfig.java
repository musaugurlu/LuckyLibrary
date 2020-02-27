/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 2/26/20, 11:15 PM
 */

package com.musaugurlu.luckylibrary.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //TODO: Implement Restriction on User and Management pages
        http.authorizeRequests()
                .antMatchers("/**").permitAll(); //Development Only
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
        //TODO: Implement UserDetailService, handle Authentication and Authorization
    }
}
