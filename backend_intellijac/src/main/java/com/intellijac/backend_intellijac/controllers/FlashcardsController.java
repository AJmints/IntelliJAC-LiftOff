package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.exception.FlashcardNotFoundException;
import com.intellijac.backend_intellijac.models.Flashcard;
import com.intellijac.backend_intellijac.repository.FlashcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping(value = "/flashcards")
public class FlashcardsController {

    @Autowired
    private FlashcardRepository flashcardRepository;

    @CrossOrigin
    @PostMapping("/flashcard")
    public Flashcard newFlashcard(@RequestBody Flashcard newFlashcard){
        return flashcardRepository.save(newFlashcard);
    }

    @CrossOrigin
    @GetMapping("/getFlashcards")
    List<Flashcard> getAllFlashcards(){
        return flashcardRepository.findAll();
    }


    @GetMapping("/flashcard/{id}")
    Flashcard getFlashCardById(@PathVariable Long id) {
        return flashcardRepository.findById(id)
                .orElseThrow(()->new FlashcardNotFoundException(id));
    }

    @DeleteMapping("/flashcard/{id}")
    String deleteFlashcard(@PathVariable Long id){
        flashcardRepository.deleteById(id);
        return "Flashcard deleted";
    }

    //For users to update their flashcards:

    @PutMapping("/flashcard/{id}")
    Flashcard updateFlashcard(@RequestBody Flashcard newFlashcard, @PathVariable Long id) {
        return flashcardRepository.findById(id)
                .map(flashcard -> {
                    flashcard.setName(newFlashcard.getName());
                    flashcard.setDescription(newFlashcard.getDescription());
                    return flashcardRepository.save(flashcard);
                }).orElseThrow(()->new FlashcardNotFoundException(id));
    }

}