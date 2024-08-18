package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Booking;

public interface BookingService {
    Booking getBookingById(Long id);
    List<Booking> getAllBookings();
    Booking saveBooking(Booking booking);
    void deleteBooking(Long id);
    Booking updateBookingStatus(Long id, String status); // New method to update status
    Booking updateBooking(Long id, Booking booking);
}

 