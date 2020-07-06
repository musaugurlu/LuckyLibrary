/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/4/20, 10:37 AM
 */

package com.musaugurlu.luckylibrary.backend.models;

import javax.persistence.*;

@Entity
public class Role {
    @Id
    @GeneratedValue
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EnumRole name;

    public Role() {
    }

    public Role(EnumRole name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public EnumRole getName() {
        return name;
    }

    public void setName(EnumRole name) {
        this.name = name;
    }
}
