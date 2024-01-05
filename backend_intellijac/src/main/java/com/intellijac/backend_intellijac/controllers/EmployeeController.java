package com.intellijac.backend_intellijac.controllers;

import com.intellijac.backend_intellijac.dto.EmployeeDTO;
import com.intellijac.backend_intellijac.dto.LoginDTO;
import com.intellijac.backend_intellijac.response.LoginMessage;
import com.intellijac.backend_intellijac.service.EmployeeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping(path = "/register")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMessage loginMessage = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }

    @PostMapping("logout")
    public String logOut(HttpServletRequest request){
        request.getSession().invalidate();
        return  "redirect:login";
    }
}
