/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:14 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Credit;
import com.musaugurlu.luckylibrary.backend.models.Patron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditRepository extends JpaRepository<Credit, Long> {
    Credit findByPatron(Patron patron);
}
