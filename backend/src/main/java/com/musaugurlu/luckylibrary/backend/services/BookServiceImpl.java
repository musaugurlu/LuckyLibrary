/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Category;
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
        return bookRepository.findTop8ByOrderByPublishedDateDesc();
    }

    @Override
    public Optional<List<Book>> getPopularBooks() { return bookRepository.findTop8ByOrderByViewDesc(); }

    @Override
    public long count() {
        return bookRepository.count();
    }

    @Override
    public List<Book> search(String word) {
        return bookRepository.findByTitleContainingIgnoreCase(word);
    }

    @Override
    public List<Book> findAllByCategory(Category category) {
        return bookRepository.findAllByCategory(category);
    }
}


