package com.stock.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.Model.ReviewModel;
import com.stock.demo.Service.ReviewService;

@RestController
public class ReviewController {
    @Autowired
    public ReviewService rs;
    @GetMapping("/get/review")
    public List<ReviewModel> get()
    {
        return rs.getDetails();
    }
    @PostMapping("/post/review")
    public String add(ReviewModel rm)
    {
        rs.postDetails(rm);
        return "Added";
    }
    @DeleteMapping("/delete/{rid}")
    public String del(@PathVariable int rid)
    {
        rs.deleteDetails(rid);
        return "deleted";
    }
}
