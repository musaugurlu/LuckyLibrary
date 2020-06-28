/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:09 PM
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
    Optional<List<Book>> findTop6ByOrderByPublishedDateDesc();
    Optional<List<Book>> findTop10ByOrderByViewDesc();
    List<Book> findByTitleContainingIgnoreCase(String word);
    long count();
    List<Book> findAllByCategory(Category category);
}

