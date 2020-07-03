/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Patron;
import com.musaugurlu.luckylibrary.backend.repositories.PatronRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PatronServiceImpl implements PatronService {

    @Autowired
    PatronRepository patronRepository;

    @Override
    public Optional<Patron> findById(UUID id) {
        return patronRepository.findById(id);
    }

    @Override
    public List<Patron> findAll() {
        return patronRepository.findAll();
    }

    @Override
    public Patron save(Patron patron) {
        return patronRepository.save(patron);
    }
}
