/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Credit;
import com.musaugurlu.luckylibrary.backend.models.Patron;

import java.util.List;
import java.util.Optional;

public interface CreditService {
    Optional<Credit> findById(Long id);

    List<Credit> findAll();

    Credit save(Credit credit);

    Credit findByPatron(Patron patron);
}
