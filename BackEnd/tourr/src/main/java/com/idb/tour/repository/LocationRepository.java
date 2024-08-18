package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {
    // Additional query methods if needed
}

