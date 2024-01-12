package com.intellijac.backend_intellijac.repository;

import com.intellijac.backend_intellijac.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository <Contact, Integer> {

}
