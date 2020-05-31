/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 5/25/20, 4:13 PM
 */

package com.musaugurlu.luckylibrary.backend.repositories;

import com.musaugurlu.luckylibrary.backend.models.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

}
