package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Itinerary;

public interface ItineraryService {
    Itinerary getItineraryById(Long id);
    List<Itinerary> getAllItineraries();
    Itinerary saveItinerary(Itinerary itinerary);
    void deleteItinerary(Long id);
}

