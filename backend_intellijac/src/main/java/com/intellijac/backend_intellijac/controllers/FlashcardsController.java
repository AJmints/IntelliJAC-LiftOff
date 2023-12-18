package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.models.FlashcardEntity;
import com.intellijac.backend_intellijac.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping(value = "/flashcards")
public class FlashcardsController {

    @Autowired
    private FlashcardRepository flashcardRepository;

    @CrossOrigin
    @PostMapping("/addFlashcard")
    public ResponseEntity<String> addFlashcard(@RequestBody FlashcardEntity flashcardEntity){
        //flashcardRepository.save(flashcardEntity)
        return new ResponseEntity<String>("Flashcard saved", HttpStatus.OK);
    }

}