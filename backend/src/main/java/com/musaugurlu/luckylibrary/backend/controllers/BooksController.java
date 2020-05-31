/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:02 PM
 */

package com.musaugurlu.luckylibrary.backend.controllers;
import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/books")
public class BooksController {

    @Autowired
    BookService bookService;

//    @GetMapping
//    public String books(Model model) {
//        return "books/index";
//    }
//
//    @GetMapping("/{id}")
//    public Optional<Book> book(@PathVariable UUID id) {
//        return bookService.findById(id);
//    }
//
//    @PostMapping("/{id}/hold")
//    public void holdBook(@PathVariable UUID id) {
//        //TODO:Implement this
//    }
//
//    @PostMapping("/{id}/checkin")
//    public void checkInBook(@PathVariable UUID id) {
//        //TODO:Implement this
//    }
//
//    @PostMapping("/{id}/checkout")
//    public void checkOutBook(@PathVariable UUID id) {
//        //TODO:Implement this
//    }
//
////    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
////    public void handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
////
////        String message = String.format("'%s' should be a valid '%s' and '%s' isn't",
////                ex.getName(), ex.getRequiredType().getSimpleName(), ex.getValue());
////
////        System.out.println(message);
////        //TODO: Handle this exception better
////    }

    @GetMapping("/newbooks")
    public Optional<List<Book>> popularBooks() {
        return bookService.getPopularBooks();
    }

    @GetMapping("/popularbooks")
    public Optional<List<Book>> newBooks() {
        return bookService.getNewBooks();
    }

}
