package com.idb.tour.controler;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idb.tour.model.Tour;
import com.idb.tour.service.TourService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TourController {


    private final TourService tourService;

    @PostMapping("/tour")
    public Tour posTour(@RequestBody Tour tour) {
        return tourService.saveTour(tour);
    }
   


    @GetMapping("/tours")
    public List<Tour> findAllTours() {
        return tourService.findAllTours();
    }


    @GetMapping("/tour/{id}")
    public ResponseEntity<Tour> getTourById(@PathVariable Long id) {
        Tour tour = tourService.getTourById(id);
        if (tour == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tour);
    }


    @DeleteMapping("tour/{id}")
    public ResponseEntity<Void> deleteTour(@PathVariable("id") Long id) {
       Tour existingTour = tourService.getTourById(id);
        if (existingTour == null) {
            return ResponseEntity.notFound().build();
        }
        tourService.deleteTour(id);
        return ResponseEntity.noContent().build();
    }
}
