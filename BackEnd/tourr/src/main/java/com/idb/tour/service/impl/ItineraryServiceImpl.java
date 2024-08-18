package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Itinerary;
import com.idb.tour.repository.ItineraryRepository;
import com.idb.tour.service.ItineraryService;

@Service
@Transactional
public class ItineraryServiceImpl implements ItineraryService {

    @Autowired
    private ItineraryRepository itineraryRepository;

    @Override
    public Itinerary getItineraryById(Long id) {
        Optional<Itinerary> itinerary = itineraryRepository.findById(id);
        return itinerary.orElse(null);
    }

    @Override
    public List<Itinerary> getAllItineraries() {
       List<Itinerary> itineraries = itineraryRepository.findAll();
       itineraries.forEach(i -> {
           i.setTour(null);
       });
       return itineraries;
    }

    @Override
    public Itinerary saveItinerary(Itinerary itinerary) {
        return itineraryRepository.save(itinerary);
    }

    @Override
    public void deleteItinerary(Long id) {
        itineraryRepository.deleteById(id);
    }
}

