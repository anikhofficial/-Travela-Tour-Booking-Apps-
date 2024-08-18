package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.FAQ;

public interface FAQRepository extends JpaRepository<FAQ, Long> {
    // Additional query methods if needed
}

