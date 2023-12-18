package com.intellijac.backend_intellijac.repository;


import com.intellijac.backend_intellijac.models.FlashcardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlashcardRepository extends JpaRepository<FlashcardEntity, Integer> {
}
