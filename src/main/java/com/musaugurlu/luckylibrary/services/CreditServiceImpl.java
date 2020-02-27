/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:49 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Credit;
import com.musaugurlu.luckylibrary.models.Patron;
import com.musaugurlu.luckylibrary.repositories.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CreditServiceImpl implements CreditService {

    @Autowired
    CreditRepository creditRepository;

    @Override
    public Optional<Credit> findById(Long id) {
        return creditRepository.findById(id);
    }

    @Override
    public List<Credit> findAll() {
        return creditRepository.findAll();
    }

    @Override
    public Credit save(Credit credit) {
        return creditRepository.save(credit);
    }

    @Override
    public Credit findByPatron(Patron patron) {
        return creditRepository.findByPatron(patron);
    }
}
