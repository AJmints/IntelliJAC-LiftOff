package com.intellijac.backend_intellijac.service;

import com.intellijac.backend_intellijac.dto.EmployeeDTO;
import com.intellijac.backend_intellijac.dto.LoginDTO;
import com.intellijac.backend_intellijac.response.LoginMessage;


public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginMessage loginEmployee(LoginDTO loginDTO);
}
