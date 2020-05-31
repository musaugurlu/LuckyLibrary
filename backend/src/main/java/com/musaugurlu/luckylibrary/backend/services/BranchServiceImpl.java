/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/1/20, 11:51 AM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Branch;
import com.musaugurlu.luckylibrary.backend.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BranchServiceImpl implements BranchService {

    @Autowired
    BranchRepository branchRepository;

    @Override
    public Optional<Branch> findById(Long id) {
        return branchRepository.findById(id);
    }

    @Override
    public List<Branch> findAll() {
        return branchRepository.findAll();
    }
}
