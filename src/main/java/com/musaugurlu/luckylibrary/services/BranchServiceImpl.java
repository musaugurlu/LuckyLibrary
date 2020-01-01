/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/1/20, 11:51 AM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Branch;
import com.musaugurlu.luckylibrary.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BranchServiceImpl implements BranchService {

    @Autowired
    BranchRepository branchRepository;

    @Override
    public Branch findById(Long id) {
        return branchRepository.findById(id).get();
    }

    @Override
    public List<Branch> findAll() {
        return branchRepository.findAll();
    }
}
