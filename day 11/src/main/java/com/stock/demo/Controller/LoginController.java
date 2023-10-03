package com.stock.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.Service.LoginService;
@CrossOrigin("*")
@RestController
public class LoginController {
    @Autowired
    public LoginService ls;
    @GetMapping("/get/login")
    public String get(@RequestParam String username,@RequestParam String password)
    {
        boolean isvalid=ls.getDetails(username,password);
        if(isvalid)
        {
            return "Login success";
        }
        else{
            return "Invalid Username or Password";
        }
    }
}
