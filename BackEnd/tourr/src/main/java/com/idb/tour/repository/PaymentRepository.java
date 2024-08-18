package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // Additional query methods if needed
}

