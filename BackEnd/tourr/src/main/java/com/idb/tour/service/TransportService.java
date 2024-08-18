package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Transport;

public interface TransportService {
    Transport getTransportById(Long id);
    List<Transport> getAllTransports();
    Transport saveTransport(Transport transport);
    void deleteTransport(Long id);
}

