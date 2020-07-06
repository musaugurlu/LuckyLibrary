/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/4/20, 11:39 AM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.EnumRole;
import com.musaugurlu.luckylibrary.backend.models.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {
    Optional<Role> findById(int id);
    List<Role> findAll();
    Optional<Role> findByName(EnumRole role);
    Role save(Role role);
    Optional<Role> findFirstBy();
}
