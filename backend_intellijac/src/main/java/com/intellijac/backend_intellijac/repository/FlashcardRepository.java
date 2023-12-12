package com.intellijac.backend_intellijac.repository;

import com.intellijac.backend_intellijac.models.FlashcardEntity;
import org.springframework.data.repository.CrudRepository;

public interface FlashcardRepository extends CrudRepository<FlashcardEntity, Integer>{
}
