package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Voucher;

public interface VoucherService {
    Voucher getVoucherById(Long id);
    List<Voucher> getAllVouchers();
    Voucher saveVoucher(Voucher voucher);
    void deleteVoucher(Long id);
}

