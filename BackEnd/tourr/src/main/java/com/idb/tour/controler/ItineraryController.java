package com.idb.tour.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idb.tour.model.Itinerary;
import com.idb.tour.service.ItineraryService;

@RestController
@RequestMapping("/api")
public class ItineraryController {

    @Autowired
    private ItineraryService itineraryService;

    @GetMapping("/schedule/{id}")
    public ResponseEntity<Itinerary> getItineraryById(@PathVariable Long id) {
   Itinerary itinerary = itineraryService.getItineraryById(id);
        if (itinerary == null) {
            return ResponseEntity.notFound().build();
        } 
        return ResponseEntity.ok(itinerary);
    }

    @GetMapping("/schedules")
    public List <Itinerary> findAllItineraries() {
        return itineraryService.getAllItineraries();
    }
    

    @PostMapping("/schedule")
   public Itinerary saveItinerary(@RequestBody Itinerary itinerary) {
        return itineraryService.saveItinerary(itinerary);
    }

    @DeleteMapping("/schedule/{id}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable("id") Long id) {
       Itinerary existingItinerary = itineraryService.getItineraryById(id);
        if (existingItinerary == null) {
            return ResponseEntity.notFound().build();
        }
        itineraryService.deleteItinerary(id);
        return ResponseEntity.noContent().build();
    }

}