package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Payment;
import com.idb.tour.repository.PaymentRepository;
import com.idb.tour.service.EmailService;
import com.idb.tour.service.PaymentService;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private EmailService emailService;

    @Override
    public Payment getPaymentById(Long id) {
        Optional<Payment> payment = paymentRepository.findById(id);
        return payment.orElse(null);
    }

    @Override
    public List<Payment> getAllPayments() {
        List<Payment> payments = paymentRepository.findAll();
        payments.forEach(p -> {
            p.setBooking(null);
        });
        return payments;
    }

    @Override
    public Payment savePayment(Payment payment) {
        Payment savedPayment = paymentRepository.save(payment);

        // Send confirmation email
        String subject = "Payment Confirmation";
        String body = "<h4>Dear " + payment.getBooking().getName() + ",</h4> " +
                "<p>Thank you for your payment " + payment.getAmount()
                + ". We appreciate it. Your booking for the tour package " + payment.getBooking().getTourPackage()
                + "is confirmed. We look forward to seeing you on the tour</p>" +
                "<p>Best regards</p>" +
                "<p>Travela Team</p>";
        emailService.sendHtmlEmail(payment.getEmail(), subject, body);
        return savedPayment;
    }

    @Override
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}
