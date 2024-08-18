package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Payment;

public interface PaymentService {
    Payment getPaymentById(Long id);
    List<Payment> getAllPayments();
    Payment savePayment(Payment payment);
    void deletePayment(Long id);
}

