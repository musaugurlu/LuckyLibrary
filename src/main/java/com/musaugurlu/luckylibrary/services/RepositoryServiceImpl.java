/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:53 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.models.Repository;
import com.musaugurlu.luckylibrary.repositories.RepositoryRepository;
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
