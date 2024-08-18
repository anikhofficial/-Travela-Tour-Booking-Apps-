package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Additional query methods if needed
}
