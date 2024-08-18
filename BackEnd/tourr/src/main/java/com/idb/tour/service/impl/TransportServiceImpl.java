package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Transport;
import com.idb.tour.repository.TransportRepository;
import com.idb.tour.service.TransportService;

@Service
@Transactional
public class TransportServiceImpl implements TransportService {

    @Autowired
    private TransportRepository transportRepository;

    @Override
    public Transport getTransportById(Long id) {
        Optional<Transport> transport = transportRepository.findById(id);
        return transport.orElse(null);
    }

    @Override
    public List<Transport> getAllTransports() {
        List<Transport> transports = transportRepository.findAll();
        transports.forEach(t -> {
            t.setTour(null);
           
        });
        return transports;
    }

    @Override
    public Transport saveTransport(Transport transport) {
        return transportRepository.save(transport);
    }

    @Override
    public void deleteTransport(Long id) {
        transportRepository.deleteById(id);
    }
}

