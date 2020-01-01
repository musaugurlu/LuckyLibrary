/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/1/20, 11:49 AM
 */

package com.musaugurlu.luckylibrary.repositories;

import com.musaugurlu.luckylibrary.models.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Long> {

}
