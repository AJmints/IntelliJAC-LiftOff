package com.intellijac.backend_intellijac.repository;

import com.intellijac.backend_intellijac.models.UserComment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository <UserComment, Integer> {
}
