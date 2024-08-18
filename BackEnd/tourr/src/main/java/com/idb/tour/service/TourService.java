package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Tour;

public interface TourService {
    Tour getTourById(Long id);
    List<Tour> findAllTours();
    Tour saveTour(Tour tour);
    void deleteTour(Long id);
}

