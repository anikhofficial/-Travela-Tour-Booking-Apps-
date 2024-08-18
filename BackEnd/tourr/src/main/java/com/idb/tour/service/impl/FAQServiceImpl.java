package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.FAQ;
import com.idb.tour.repository.FAQRepository;
import com.idb.tour.service.FAQService;

@Service
@Transactional
public class FAQServiceImpl implements FAQService {

    @Autowired
    private FAQRepository faqRepository;

    @Override
    public FAQ getFAQById(Long id) {
        Optional<FAQ> faq = faqRepository.findById(id);
        return faq.orElse(null);
    }

    @Override
    public List<FAQ> getAllFAQs() {
        return faqRepository.findAll();
    }

    @Override
    public FAQ saveFAQ(FAQ faq) {
        return faqRepository.save(faq);
    }

    @Override
    public void deleteFAQ(Long id) {
        faqRepository.deleteById(id);
    }
}

