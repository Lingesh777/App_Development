package com.stock.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stock.demo.Model.Signup;

@Repository
public interface SignupRepo extends JpaRepository<Signup,String> {
    public boolean existsByEmail(String email);
}
