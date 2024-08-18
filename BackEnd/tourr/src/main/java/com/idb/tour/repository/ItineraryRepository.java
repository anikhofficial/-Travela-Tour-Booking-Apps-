package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Itinerary;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    // Additional query methods if needed
}

