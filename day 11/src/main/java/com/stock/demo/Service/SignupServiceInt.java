package com.stock.demo.Service;
import java.util.List;
import com.stock.demo.Model.Signup;

public interface SignupServiceInt {
    public void postDetails(Signup su);
    public List<Signup> getDetails();
    public boolean username(String username);
    public boolean email(String email);
}
