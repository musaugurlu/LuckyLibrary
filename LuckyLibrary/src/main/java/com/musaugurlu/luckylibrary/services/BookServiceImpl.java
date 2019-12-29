/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 7:37 PM
 */

package com.musaugurlu.luckylibrary.services;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    BookRepository bookRepository;

    @Override
    public Book findById(UUID id) {
        return bookRepository.findById(id).get();
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
}
