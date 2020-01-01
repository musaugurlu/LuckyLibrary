/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:33 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Patron;

import java.util.List;
import java.util.UUID;

public interface PatronService {
    Patron findById(UUID id);

    List<Patron> findAll();

    Patron save(Patron patron);
}
