package com.lingesh.stockmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.lingesh.stockmanagement.Model.Review;
import com.lingesh.stockmanagement.Service.ReviewService;
import com.lingesh.stockmanagement.constant.Api;
@RequestMapping(Api.AUTH)
@RestController
public class ReiewController {
    @Autowired
    public ReviewService rs;
    @GetMapping("/getreview")
    public List<Review> get()
    {
        return rs.getAllReview();
    }
    @PostMapping("/postreview")
        public ResponseEntity<Review> postrev(@RequestBody Review rm)
        {
            return rs.postreview(rm);
        }
    // @DeleteMapping("/delete/{rid}")
    // public String del(@PathVariable int rid)
    // {
    //     rs.deletereview(rid);
    //     return "deleted";
    // }
}
