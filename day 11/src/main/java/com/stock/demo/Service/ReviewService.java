package com.stock.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.Model.ReviewModel;
import com.stock.demo.Repository.ReviewRepo;

@Service
public class ReviewService implements ReviewServiceInt {
    @Autowired
    public ReviewRepo rr;
    @Override
    public void postDetails(ReviewModel rm)
    {
        rr.save(rm);
    }
    @Override
    public List<ReviewModel> getDetails ()
    {
        return rr.findAll();
    }
    public void deleteDetails(int rid)
    {
        rr.deleteById(rid);
    }
    
}
