/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:32 PM
 */

package com.musaugurlu.luckylibrary.repositories;

import com.musaugurlu.luckylibrary.models.Credit;
import com.musaugurlu.luckylibrary.models.Patron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditRepository extends JpaRepository<Credit, Long> {
    Credit findByPatron(Patron patron);
}
