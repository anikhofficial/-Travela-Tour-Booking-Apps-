package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Location;

public interface LocationService {
    Location getLocationById(Long id);
    List<Location> getAllLocations();
    Location saveLocation(Location location);
    void deleteLocation(Long id);
}

