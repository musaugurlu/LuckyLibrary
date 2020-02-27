/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:34 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.models.Repository;

import java.util.List;
import java.util.Optional;

public interface RepositoryService {
    Optional<Repository> findById(Long id);

    List<Repository> findAll();

    Repository save(Repository repository);

    Repository findByBook(Book book);
}
