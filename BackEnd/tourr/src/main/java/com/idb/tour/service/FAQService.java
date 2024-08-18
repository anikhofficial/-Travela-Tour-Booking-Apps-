package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.FAQ;

public interface FAQService {
    FAQ getFAQById(Long id);
    List<FAQ> getAllFAQs();
    FAQ saveFAQ(FAQ faq);
    void deleteFAQ(Long id);
}

