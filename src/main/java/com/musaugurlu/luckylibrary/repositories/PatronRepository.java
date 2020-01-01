/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:24 PM
 */

package com.musaugurlu.luckylibrary.repositories;

import com.musaugurlu.luckylibrary.models.Patron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PatronRepository extends JpaRepository<Patron, UUID> {
}
