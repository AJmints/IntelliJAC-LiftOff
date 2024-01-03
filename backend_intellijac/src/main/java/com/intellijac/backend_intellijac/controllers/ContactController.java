package com.intellijac.backend_intellijac.controllers;


import com.intellijac.backend_intellijac.models.Contact;
import com.intellijac.backend_intellijac.models.Flashcard;
import com.intellijac.backend_intellijac.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value="/api")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @CrossOrigin
    @PostMapping("/contact")
    public ResponseEntity<String> newContact(@RequestBody Contact newContact) {
        contactRepository.save(newContact);
        return ResponseEntity.ok("Contact submitted successfully!");
    }
}

