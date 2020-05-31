/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:11 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {
}
