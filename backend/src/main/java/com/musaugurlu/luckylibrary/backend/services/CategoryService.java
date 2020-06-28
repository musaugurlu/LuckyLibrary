/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 6/7/20, 5:07 PM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    Optional<Category> findById(Long id);
    Optional<Category> findByName(String name);
    List<Category> findAll();
    Category save(Category c);

}
