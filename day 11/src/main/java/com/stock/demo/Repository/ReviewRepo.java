package com.stock.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stock.demo.Model.ReviewModel;

@Repository
public interface ReviewRepo extends JpaRepository<ReviewModel,Integer> {
    
}
