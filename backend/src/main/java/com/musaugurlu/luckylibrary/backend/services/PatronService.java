/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
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
