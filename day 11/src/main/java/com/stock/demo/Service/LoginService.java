package com.stock.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.Repository.LoginRepo;

@Service
public class LoginService implements LoginServiceInt{
    @Autowired
    public LoginRepo lr;
    @Override
    public boolean getDetails(String username,String password)
    {
        return lr.existsByUsernameAndPassword(username, password);
    }
}
