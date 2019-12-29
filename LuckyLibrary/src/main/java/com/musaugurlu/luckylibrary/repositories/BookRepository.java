/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:25 PM
 */

package com.musaugurlu.luckylibrary.repositories;

import com.musaugurlu.luckylibrary.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    List<Book> findBooksByTitleOrderByTitle(String title);
}
