/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/4/20, 11:31 AM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.EnumRole;
import com.musaugurlu.luckylibrary.backend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findRoleByName(EnumRole role);
    Optional<Role> findFirstBy();

}
