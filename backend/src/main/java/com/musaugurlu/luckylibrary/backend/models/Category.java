/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String img;
    private int bcount;

    public Category() {
        this.bcount = 0;
    }

    public Category(String name) {
        this.name = name;
        this.bcount = 0;
    }

    public Category(String name, String img) {
        this.name = name;
        this.img = img;
        this.bcount = 0;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getBcount() {
        return bcount;
    }

    public void setBcount(int bcount) {
        this.bcount = bcount;
    }
}
