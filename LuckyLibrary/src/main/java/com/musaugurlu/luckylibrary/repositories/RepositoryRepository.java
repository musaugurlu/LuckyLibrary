/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:27 PM
 */

package com.musaugurlu.luckylibrary.repositories;

import com.musaugurlu.luckylibrary.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryRepository extends JpaRepository<com.musaugurlu.luckylibrary.models.Repository, Long> {
    com.musaugurlu.luckylibrary.models.Repository findByBook(Book book);
}
