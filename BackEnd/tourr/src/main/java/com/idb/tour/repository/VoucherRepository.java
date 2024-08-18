package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {
    // Additional query methods if needed
}
