/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Category;

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
    long count();
    List<Book> search(String word);
    List<Book> findAllByCategory(Category category);
}
