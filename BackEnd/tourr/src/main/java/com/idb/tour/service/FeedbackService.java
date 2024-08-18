package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Feedback;

public interface FeedbackService {
    Feedback getFeedbackById(Long id);
    List<Feedback> getAllFeedbacks();
    Feedback saveFeedback(Feedback feedback);
    void deleteFeedback(Long id);
}

