/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:33 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookService {
    Optional<Book> findById(UUID id);

    List<Book> findAll();

    Book save(Book book);

    List<Book> findByTitle(String title);

    Optional<Book> findFirstBy();

    Optional<List<Book>> getNewBooks();

    Optional<List<Book>> getPopularBooks();
}
