/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:33 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Patron;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PatronService {
    Optional<Patron> findById(UUID id);

    List<Patron> findAll();

    Patron save(Patron patron);
}
