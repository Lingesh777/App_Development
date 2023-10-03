package com.stock.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.Model.Signup;
import com.stock.demo.Repository.SignupRepo;

@Service
public class SignupService implements SignupServiceInt {
    @Autowired
    public SignupRepo sr;

    @Override
    public void postDetails(Signup su)
    {
        sr.save(su);
    }
    @Override
    public List<Signup> getDetails()
    {
        return sr.findAll();
    }
    @Override
    public boolean username(String username)
    {
        return sr.existsById(username);
    }
    @Override
    public boolean email(String email)
    {
        return sr.existsByEmail(email);
    }
}
