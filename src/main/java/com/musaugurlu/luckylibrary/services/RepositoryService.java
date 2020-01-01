/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:34 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.models.Repository;

import java.util.List;

public interface RepositoryService {
    Repository findById(Long id);

    List<Repository> findAll();

    Repository save(Repository repository);

    Repository findByBook(Book book);
}
