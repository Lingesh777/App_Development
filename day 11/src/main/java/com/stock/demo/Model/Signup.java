package com.stock.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userdetails")
public class Signup {
    @Id
    private String username;
    private String email;
    private String password;
    private String mobilenum;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getMobilenum() {
        return mobilenum;
    }
    public void setMobilenum(String mobilenum) {
        this.mobilenum = mobilenum;
    }
    
}
