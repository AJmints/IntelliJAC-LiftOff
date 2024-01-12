package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.models.UserComment;
import com.intellijac.backend_intellijac.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("comments")
public class UserCommentController {

    @Autowired
    private CommentRepository commentRepository;

    @CrossOrigin
    @PostMapping("add")
    UserComment userComment (@RequestBody UserComment userComment) {
        return commentRepository.save(userComment);
    }


}
