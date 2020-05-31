/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 3:59 PM
 */

package com.musaugurlu.luckylibrary.backend.configurations;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Component
public class DbSeeder implements CommandLineRunner {

    @Autowired
    BookService bookService;

    @Override
    public void run(String... args) throws Exception {

        Optional<Book> b = bookService.findFirstBy();

        if (b.isEmpty()) {
            ObjectMapper dbdata = new ObjectMapper();
            TypeReference<List<Book>> typeReference = new TypeReference<List<Book>>(){};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/db.json");

            try {
                List<Book> books = dbdata.readValue(inputStream,typeReference);
                for (Book book: books) {
                    bookService.save(book);
                }
            } catch (IOException e){
                System.out.println("Unable to save users: " + e.getMessage());
            }
        }
    }
}

