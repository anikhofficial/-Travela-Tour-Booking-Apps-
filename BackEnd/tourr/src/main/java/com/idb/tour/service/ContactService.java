package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Contact;

public interface ContactService {
    Contact getContactById(Long id);
    List<Contact> getAllContacts();
    Contact saveContact(Contact contact);
    void deleteContact(Long id);
}
