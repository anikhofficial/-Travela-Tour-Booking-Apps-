package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Tour;
import com.idb.tour.repository.TourRepository;
import com.idb.tour.service.TourService;

@Service
@Transactional
public class TourServiceImpl implements TourService {

    @Autowired
    private TourRepository tourRepository;

    @Override
    public Tour getTourById(Long id) {
        Optional<Tour> tour = tourRepository.findById(id);
        return tour.orElse(null);
    }

    @Override
    public List<Tour> findAllTours() {
        List<Tour> tours = tourRepository.findAll();
        tours.forEach(t -> {
            t.setItineraries(null);
            t.setReviews(null);
            t.setBookings(null);
        });
        return tours;
    }

    @Override
    public Tour saveTour(Tour tour) {
        return tourRepository.save(tour);
    }

    @Override
    public void deleteTour(Long id) {
        tourRepository.deleteById(id);
    }
}

