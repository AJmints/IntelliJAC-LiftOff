package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.models.Rating;
import com.intellijac.backend_intellijac.models.data.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import jakarta.persistence.Entity;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin
@RestController
@RequestMapping ("ratings")
public class AppRatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @CrossOrigin
    @PostMapping("add")
    Rating rating (@RequestBody Rating rating) {
        return ratingRepository.save(rating);

    }

}
