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

import com.idb.tour.model.Transport;
import com.idb.tour.service.TransportService;

@RestController
@RequestMapping("/api")
public class TransportController {

    @Autowired
    private TransportService transportService;

    @GetMapping("/transport/{id}")
    public ResponseEntity<Transport> getTransportById(@PathVariable Long id) {
        Transport transport = transportService.getTransportById(id);
        if (transport == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(transport);
    }

    @GetMapping("/transports")
    public List<Transport> getAllTransports() {
        return transportService.getAllTransports();
    }

    @PostMapping("/transport")
    public Transport saveTransport(@RequestBody Transport transport) {
        return transportService.saveTransport(transport);
    }

    @DeleteMapping("/transport/{id}")
    public ResponseEntity<Void> deleteTransport(@PathVariable Long id) {
      Transport existingTransport = transportService.getTransportById(id);
        if (existingTransport == null) {
            return ResponseEntity.notFound().build();
        }
        transportService.deleteTransport(id);
        return ResponseEntity.noContent().build();
    }
}

