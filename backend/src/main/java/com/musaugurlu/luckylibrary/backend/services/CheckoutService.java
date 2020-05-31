/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/12/20, 11:00 AM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Checkout;

import java.util.List;
import java.util.Optional;

public interface CheckoutService {
    Optional<Checkout> findById(Long id);

    List<Checkout> findAll();
}
