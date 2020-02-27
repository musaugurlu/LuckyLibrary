/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/12/20, 11:01 AM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Checkout;
import com.musaugurlu.luckylibrary.repositories.CheckoutRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    CheckoutRepository checkoutRepository;

    @Override
    public Optional<Checkout> findById(Long id) {
        return checkoutRepository.findById(id);
    }

    @Override
    public List<Checkout> findAll() {
        return checkoutRepository.findAll();
    }
}
