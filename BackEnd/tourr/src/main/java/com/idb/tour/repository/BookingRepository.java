package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Additional query methods if needed
}
