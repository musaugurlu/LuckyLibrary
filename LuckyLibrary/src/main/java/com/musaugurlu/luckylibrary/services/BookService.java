/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:33 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;

import java.util.List;
import java.util.UUID;

public interface BookService {
    Book findById(UUID id);

    List<Book> findAll();

    Book save(Book book);

    List<Book> findByTitle(String title);
}
