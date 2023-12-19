package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.models.data.UserRepository;
import com.intellijac.backend_intellijac.models.dto.LoginFormDTO;
import com.intellijac.backend_intellijac.models.dto.RegistrationFormDTO;
import com.intellijac.backend_intellijac.repository.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    public User getUserFormSession(HttpSession session) {

        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return null;
        }
        return userOpt.get();
    }

    @CrossOrigin(origins = "http://localhost:3000/register")
    @GetMapping("register")
    public String displayRegistrationForm(Model model, HttpSession session) {
        model.addAttribute("registrationFormDTO", new RegistrationFormDTO());
        model.addAttribute("loggedIn", session.getAttribute(userSessionKey) != null);
        return "register";
    }

    @CrossOrigin(origins = "http://localhost:3000/register")
    @PostMapping("register")
    public String processRegistrationForm(@ModelAttribute @Valid RegistrationFormDTO registrationFormDTO, Errors errors, HttpServletRequest request, Model model) {

        //send user back if errors found

        if (errors.hasErrors()) {
            return "register";
        }
        User existingUser = userRepository.findByUsername(registrationFormDTO.getUsername());

        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyExists", "A user with that name already exists");
            return "register";
        }

        String password = registrationFormDTO.getPassword();

        String verifyPassword = registrationFormDTO.getVerifyPassword();

        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            model.addAttribute("title", "Register");
            return "register";
        }


        //save new username and pwd

        User newUser = new User(registrationFormDTO.getUsername(), registrationFormDTO.getPassword());
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);

        return "redirect:";
    }

    @CrossOrigin(origins = "http://localhost:3000/login")
    @GetMapping("login")
    public String displayLoginForm(Model model, HttpSession session) {
        model.addAttribute(new LoginFormDTO());

        //send value of loggedIn boolean
        return "login";
    }

    @CrossOrigin(origins = "http://localhost:3000/login")
    @PostMapping("login")
    public String processLoginForm(@ModelAttribute @Valid LoginFormDTO loginFormDTO, Errors errors, HttpServletRequest request, Model model) {
        System.out.println("*****login");
        if (errors.hasErrors()) {
            return "login";
        }

        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();

        if (theUser == null || !theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "login.invalid", "Credientials invalid. Please try again");
            return "login";
        }
        setUserInSession(request.getSession(), theUser);
        return "redirect:";
    }

    @CrossOrigin(origins = "http://localhost:3000/logout")
    @GetMapping("logout")
    public String logOut(HttpServletRequest request){
        request.getSession().invalidate();
        return  "redirect:login";
    }
}

