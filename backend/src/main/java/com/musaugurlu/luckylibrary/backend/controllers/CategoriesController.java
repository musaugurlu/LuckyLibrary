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

import java.util.*;
import java.util.stream.Collectors;

@RestController
//@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("categories")
public class CategoriesController {
    @Autowired
    CategoryService categoryService;

    @Autowired
    BookService bookService;

    @GetMapping
    public List<Category> findAll() {
        List<Book> books = bookService.findAll();
        List<Category> categories = categoryService.findAll();
        for(Category cat: categories) {
            cat.setBcount((int) books.stream().filter(book -> (book.getCategory().getId() == cat.getId())).count());
        }
        return categories;
    }

    @GetMapping("{name}")
    public Optional<Category> findByName(@PathVariable String name) {
        return categoryService.findByName(name);
    }
}
