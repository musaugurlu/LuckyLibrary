/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Book;
import com.musaugurlu.luckylibrary.backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    Optional<Book> findFirstBy();
    List<Book> findBooksByTitleOrderByTitle(String title);
    Optional<List<Book>> findTop8ByOrderByPublishedDateDesc();
    Optional<List<Book>> findTop8ByOrderByViewDesc();
    List<Book> findByTitleContainingIgnoreCase(String word);
    long count();
    List<Book> findAllByCategory(Category category);
}

