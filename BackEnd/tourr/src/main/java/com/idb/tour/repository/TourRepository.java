package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Tour;

public interface TourRepository extends JpaRepository<Tour, Long> {
    // Additional query methods if needed
}
