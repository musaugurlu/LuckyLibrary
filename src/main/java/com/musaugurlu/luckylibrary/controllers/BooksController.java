/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 2/22/20, 11:14 AM
 */

package com.musaugurlu.luckylibrary.controllers;

import com.musaugurlu.luckylibrary.models.Book;
import com.musaugurlu.luckylibrary.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.Optional;
import java.util.UUID;


@Controller
@RequestMapping("/books")
public class BooksController {

    @Autowired
    BookService bookService;

    @GetMapping
    public String books(Model model) {
        return "books/index";
    }

    @GetMapping("/{id}")
    public String book(@PathVariable UUID id, Model model) {

        Optional<Book> book = bookService.findById(id);
        if (book.isPresent()) {
            model.addAttribute("book", book.get());
        }
        return "books/book";
    }

    @GetMapping("/{id}/hold")
    public void holdBook(@PathVariable UUID id) {
        //TODO:Implement this
    }

    @GetMapping("/{id}/checkin")
    public void checkInBook(@PathVariable UUID id) {
        //TODO:Implement this
    }

    @GetMapping("/{id}/checkout")
    public void checkOutBook(@PathVariable UUID id) {
        //TODO:Implement this
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public void handleTypeMismatch(MethodArgumentTypeMismatchException ex) {

        String message = String.format("'%s' should be a valid '%s' and '%s' isn't",
                ex.getName(), ex.getRequiredType().getSimpleName(), ex.getValue());

        System.out.println(message);
        //TODO: Handle this exception better
    }

}
