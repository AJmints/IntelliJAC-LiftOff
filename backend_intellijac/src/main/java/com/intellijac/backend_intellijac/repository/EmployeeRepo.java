package com.intellijac.backend_intellijac.repository;

import com.intellijac.backend_intellijac.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer>
{
    Optional<Employee> findOneByEmployeenameAndPassword(String employeename, String password);

    Employee findByEmployeename(String employeename);
}
