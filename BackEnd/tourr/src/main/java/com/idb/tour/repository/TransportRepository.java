package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Transport;

public interface TransportRepository extends JpaRepository<Transport, Long> {
    // Additional query methods if needed
}

