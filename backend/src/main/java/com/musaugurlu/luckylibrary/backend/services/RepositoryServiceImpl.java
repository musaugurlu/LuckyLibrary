/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Repository;
import com.musaugurlu.luckylibrary.backend.repositories.RepositoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RepositoryServiceImpl implements RepositoryService {

    @Autowired
    RepositoryRepository repositoryRepository;

    @Override
    public Optional<Repository> findById(Long id) {
        return repositoryRepository.findById(id);
    }

    @Override
    public List<Repository> findAll() {
        return repositoryRepository.findAll();
    }

    @Override
    public Repository save(Repository repository) {
        return repositoryRepository.save(repository);
    }

    @Override
    public Repository findByBook(Book book) {
        return repositoryRepository.findByBook(book);
    }
}
