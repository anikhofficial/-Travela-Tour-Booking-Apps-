package com.idb.tour.model;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String days;
    @Lob
    @Column(name = "photo", nullable = true, columnDefinition = "LONGBLOB")
    private String photo;
   

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @OneToMany(mappedBy = "tour")
    private List<Itinerary> itineraries;

    @OneToMany(mappedBy = "tour")
    private List<Review> reviews;

    @OneToMany(mappedBy = "tour")
    private List<Booking> bookings;   

}

