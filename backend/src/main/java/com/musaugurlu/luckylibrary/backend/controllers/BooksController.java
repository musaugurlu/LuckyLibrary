/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.controllers;
import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Category;
import com.musaugurlu.luckylibrary.backend.services.BookService;
import com.musaugurlu.luckylibrary.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@RestController
//@CrossOrigin(origins = "http://localhost:8080/**")
public class BooksController {

    @Autowired
    BookService bookService;

    @Autowired
    CategoryService categoryService;

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping("/book/{id}")
    public Optional<Book> getSingleBook(@PathVariable UUID id) {
        return bookService.findById(id);
    }

    @GetMapping("/books/newbooks")
    public Optional<List<Book>> popularBooks() {
        return bookService.getNewBooks();
    }

    @GetMapping("/books/popularbooks")
    public Optional<List<Book>> newBooks() {
        return bookService.getPopularBooks();
    }

    @GetMapping("/books/numOfBooks")
    public long numOfBooks() {
        return bookService.count();
    }

    @GetMapping(value = "/books/search", params = "query")
    public List<Book> search(@RequestParam("query") String query) {
        return bookService.search(query);
    }

    @GetMapping("/books/byCategory/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category) {
        Optional<Category> cat = categoryService.findByName(category);
        if(cat.isPresent()) {
            return bookService.findAllByCategory(cat.get());
        }
        return null;
    }

}
