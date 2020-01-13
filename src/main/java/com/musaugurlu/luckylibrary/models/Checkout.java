/*
 * Copyright (c) 2020.
 * Written by Musa Ugurlu - 1/12/20, 10:50 AM
 */

package com.musaugurlu.luckylibrary.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
public class Checkout {
    @Id
    @GeneratedValue
    Long id;

    @OneToOne
    Book book;

    @OneToOne
    Patron patron;

    @Temporal(TemporalType.DATE)
    Date dueDate;

    @CreationTimestamp
    Timestamp createdDate;

    @UpdateTimestamp
    Timestamp updatedDate;

    public Checkout() {
    }

    public Checkout(Book book, Patron patron) {
        this.book = book;
        this.patron = patron;
    }

    public Checkout(Book book, Patron patron, Date dueDate) {
        this.book = book;
        this.patron = patron;
        this.dueDate = dueDate;
    }

    public Long getId() {
        return id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Patron getPatron() {
        return patron;
    }

    public void setPatron(Patron patron) {
        this.patron = patron;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public Timestamp getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Timestamp updatedDate) {
        this.updatedDate = updatedDate;
    }
}
