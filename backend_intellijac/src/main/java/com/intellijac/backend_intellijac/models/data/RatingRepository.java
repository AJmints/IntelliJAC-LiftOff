package com.intellijac.backend_intellijac.models.data;

import com.intellijac.backend_intellijac.models.Rating;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends CrudRepository <Rating, Integer> {
}
