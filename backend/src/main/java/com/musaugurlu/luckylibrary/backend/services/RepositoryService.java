/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Repository;

import java.util.List;
import java.util.Optional;

public interface RepositoryService {
    Optional<Repository> findById(Long id);

    List<Repository> findAll();

    Repository save(Repository repository);

    Repository findByBook(Book book);
}
