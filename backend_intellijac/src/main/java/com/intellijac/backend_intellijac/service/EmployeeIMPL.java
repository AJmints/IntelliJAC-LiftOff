package com.intellijac.backend_intellijac.service;

import com.intellijac.backend_intellijac.dto.EmployeeDTO;
import com.intellijac.backend_intellijac.dto.LoginDTO;
import com.intellijac.backend_intellijac.models.Employee;
import com.intellijac.backend_intellijac.repository.EmployeeRepo;
import com.intellijac.backend_intellijac.response.LoginMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeIMPL implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee(
                employeeDTO.getEmployeeid(),
                employeeDTO.getEmployeename(),
                employeeDTO.getEmail(),
                this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        employeeRepo.save(employee);
        return employee.getEmployeename();
    }
    EmployeeDTO employeeDTO;
    @Override
    public LoginMessage loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByEmployeename(loginDTO.getEmployeename());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findOneByEmployeenameAndPassword(loginDTO.getEmployeename(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Username and Password does not Match", false);
            }
        }else {
            return new LoginMessage("Username does not exists", false);
        }
    }
}
