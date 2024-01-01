package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.models.Flashcard;
import com.intellijac.backend_intellijac.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping(value = "/flashcards")
public class FlashcardsController {

    @Autowired
    private FlashcardRepository flashcardRepository;

    @CrossOrigin
    @PostMapping("/addFlashcard")
    Flashcard newFlashcard(@RequestBody Flashcard newFlashcard){
        return flashcardRepository.save(newFlashcard);
    }

    @CrossOrigin
    @GetMapping("/getFlashcards")
    List<Flashcard> getAllFlashcards(){
        return flashcardRepository.findAll();
    }

}