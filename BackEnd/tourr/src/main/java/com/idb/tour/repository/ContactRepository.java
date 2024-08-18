package com.idb.tour.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.tour.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Additional query methods if needed
}
