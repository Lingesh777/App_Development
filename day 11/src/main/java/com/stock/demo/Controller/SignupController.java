package com.stock.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.Service.SignupService;
@CrossOrigin("*")
@RestController
public class SignupController {
    @Autowired
    public SignupService ss;

    @PostMapping("/post/signup")
    public String postDetails(@RequestBody com.stock.demo.Model.Signup su)
    {
        boolean user=ss.username(su.getUsername());
        boolean email=ss.email(su.getEmail());
        if(user)
            return "username already exists";
        else if(email)
            return "email already exists";
        else
        {
            ss.postDetails(su);
            return "Signup success";
        }
    }

    @GetMapping("/get/signup")
    public List<com.stock.demo.Model.Signup> get()
    {
        return ss.getDetails();
    }
}
