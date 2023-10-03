package com.stock.demo.Service;

import java.util.List;

import com.stock.demo.Model.ReviewModel;

public interface ReviewServiceInt {
     public void postDetails(ReviewModel rm);
     public List<ReviewModel> getDetails();
     public void deleteDetails(int rid);
}
