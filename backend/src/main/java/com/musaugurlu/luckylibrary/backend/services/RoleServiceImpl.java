/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/4/20, 11:39 AM
 */

package com.musaugurlu.luckylibrary.backend.services;

import com.musaugurlu.luckylibrary.backend.models.EnumRole;
import com.musaugurlu.luckylibrary.backend.models.Role;
import com.musaugurlu.luckylibrary.backend.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Optional<Role> findById(int id) {
        return roleRepository.findById(id);
    }

    @Override
    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Role> findByName(EnumRole role) {
        return roleRepository.findRoleByName(role);
    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Optional<Role> findFirstBy() {
        return roleRepository.findFirstBy();
    }
}
