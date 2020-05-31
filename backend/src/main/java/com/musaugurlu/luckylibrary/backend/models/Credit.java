/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:07 PM
 */

package com.musaugurlu.luckylibrary.backend.models;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class Credit {
    @Id
    @GeneratedValue
    Long id;
    BigDecimal balance;

    @OneToOne
    Patron patron;

    @CreationTimestamp
    Timestamp created_at;

    @UpdateTimestamp
    Timestamp updated_at;

    public Credit() {
    }

    public Credit(Patron patron, BigDecimal balance) {
        this.patron = patron;
        this.balance = balance;
    }

    public Long getId() {
        return id;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public Patron getPatron() {
        return patron;
    }

    public void setPatron(Patron patron) {
        this.patron = patron;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    public Timestamp getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Timestamp updated_at) {
        this.updated_at = updated_at;
    }
}

