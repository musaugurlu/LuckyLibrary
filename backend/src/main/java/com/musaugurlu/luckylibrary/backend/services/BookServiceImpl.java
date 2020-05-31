/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:37 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepository bookRepository;

    @Override
    public Optional<Book> findById(UUID id) {
        return bookRepository.findById(id);
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> findByTitle(String title) {
        return bookRepository.findBooksByTitleOrderByTitle(title);
    }

    @Override
    public Optional<Book> findFirstBy() {
        return bookRepository.findFirstBy();
    }

    @Override
    public Optional<List<Book>> getNewBooks() {
        return bookRepository.findTop6ByOrderByPublishedDateDesc();
    }

    @Override
    public Optional<List<Book>> getPopularBooks() { return bookRepository.findTop6ByOrderByPublishedDateDesc(); }

}


