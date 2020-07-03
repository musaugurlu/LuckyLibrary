/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Branch;

import java.util.List;
import java.util.Optional;

public interface BranchService {
    Optional<Branch> findById(Long id);
    Optional<Branch> findFirstBy();
    List<Branch> findAll();
    Branch save(Branch branch);
}
