/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/1/20, 11:50 AM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Branch;

import java.util.List;
import java.util.Optional;

public interface BranchService {
    Optional<Branch> findById(Long id);

    List<Branch> findAll();
}
