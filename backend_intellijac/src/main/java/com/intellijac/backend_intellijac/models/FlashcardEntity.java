package com.intellijac.backend_intellijac.models;

import jakarta.persistence.*;

@Entity
public class FlashcardEntity {

    @Id
    @GeneratedValue
    private int id;

    // TODO: add validation
    private String name;
    private String description;

    public FlashcardEntity(){}

    public FlashcardEntity(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
