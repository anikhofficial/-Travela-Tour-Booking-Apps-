package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    // Additional query methods if needed
}
