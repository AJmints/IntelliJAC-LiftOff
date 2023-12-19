package com.intellijac.backend_intellijac.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Ratings {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "user_rating")
    private String rating;

    public Ratings(String rating) {
        this.rating = rating;
    }

    public Ratings() {

    }

    //Getters and setters

    public int getId() {
        return id;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    //Hashcode and toEquals and toString


    @Override
    public String toString() {
        return "Ratings{" +
                "rating=" + rating +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ratings ratings = (Ratings) o;
        return id == ratings.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
