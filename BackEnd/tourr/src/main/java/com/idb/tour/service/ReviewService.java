package com.idb.tour.service;

import java.util.List;

import com.idb.tour.model.Review;

public interface ReviewService {
    Review getReviewById(Long id);
    List<Review> getAllReviews();
    Review saveReview(Review review);
    void deleteReview(Long id);
}
