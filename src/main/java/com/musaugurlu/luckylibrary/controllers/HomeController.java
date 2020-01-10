/*
 * Copyright (c) 2019.
 * Written by Musa Ugurlu - 12/23/19, 8:17 PM
 */

package com.musaugurlu.luckylibrary.controllers;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Controller
public class HomeController {

    @Autowired
    BookService bookService;

    @GetMapping
    public String index(Model model) {
        Optional<List<Book>> optionalNewBooks = bookService.getNewBooks();

        if (optionalNewBooks.isPresent()) {
            List<Book> newBooks = optionalNewBooks.get();
            model.addAttribute("newBooks", newBooks);
        }
        return "index";
    }

    @GetMapping("/data")
    @ResponseBody
    public Optional<List<Book>> data() {
        Optional<List<Book>> newBooks = bookService.getNewBooks();
        return newBooks;
    }
}
