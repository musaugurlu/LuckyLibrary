/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Checkout;

import java.util.List;
import java.util.Optional;

public interface CheckoutService {
    Optional<Checkout> findById(Long id);

    List<Checkout> findAll();
}
