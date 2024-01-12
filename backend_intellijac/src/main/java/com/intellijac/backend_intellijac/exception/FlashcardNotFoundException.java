package com.intellijac.backend_intellijac.exception;

public class FlashcardNotFoundException extends RuntimeException{
    public FlashcardNotFoundException(Long id) {
        super("Flashcard not found with id " + id);
    }
}
