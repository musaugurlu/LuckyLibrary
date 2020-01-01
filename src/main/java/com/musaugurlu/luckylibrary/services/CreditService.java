/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:33 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Credit;
import com.musaugurlu.luckylibrary.models.Patron;

import java.util.List;

public interface CreditService {
    Credit findById(Long id);

    List<Credit> findAll();

    Credit save(Credit credit);

    Credit findByPatron(Patron patron);
}
