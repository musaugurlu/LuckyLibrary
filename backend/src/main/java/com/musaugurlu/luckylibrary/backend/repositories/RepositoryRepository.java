/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:15 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryRepository extends JpaRepository<com.musaugurlu.luckylibrary.backend.models.Repository, Long> {
    com.musaugurlu.luckylibrary.backend.models.Repository findByBook(Book book);
}
