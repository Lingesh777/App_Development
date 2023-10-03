package com.stock.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stock.demo.Model.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login,String>  {
    public boolean existsByUsernameAndPassword(String username,String password);
}
