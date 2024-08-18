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

import com.idb.tour.model.Location;
import com.idb.tour.service.LocationService;

@RestController
@RequestMapping("/api")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/location/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable Long id) {
        Location location = locationService.getLocationById(id);
        if (location == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(location);
    }

    @GetMapping("/locations")
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }
    // public ResponseEntity<List<Location>> getAllLocations() {
    //     List<Location> locations = locationService.getAllLocations();
    //     return ResponseEntity.ok(locations);
    // }

    @PostMapping("/location")
    public Location createLocation(@RequestBody Location location) {
        return locationService.saveLocation(location);
    }
    // public ResponseEntity<Location> createLocation(@RequestBody Location location) {
    //     Location savedLocation = locationService.saveLocation(location);
    //     return ResponseEntity.ok(savedLocation);
    // }

    @DeleteMapping("location/{id}")
    public ResponseEntity<Void> deleteLocation(@PathVariable("id") Long id) {
       Location existingLocation = locationService.getLocationById(id);
        if (existingLocation == null) {
            return ResponseEntity.notFound().build();
        }
        locationService.deleteLocation(id);
        return ResponseEntity.noContent().build();
    }
}

