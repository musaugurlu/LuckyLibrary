/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:14 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Patron;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PatronRepository extends JpaRepository<Patron, UUID> {
}
