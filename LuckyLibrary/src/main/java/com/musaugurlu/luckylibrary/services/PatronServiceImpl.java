/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:45 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Patron;
import com.musaugurlu.luckylibrary.repositories.PatronRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PatronServiceImpl implements PatronService {

    @Autowired
    PatronRepository patronRepository;

    @Override
    public Patron findById(UUID id) {
        return patronRepository.findById(id).get();
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
