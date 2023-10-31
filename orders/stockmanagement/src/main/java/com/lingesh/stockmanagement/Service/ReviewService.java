package com.lingesh.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.lingesh.stockmanagement.Model.Review;
import com.lingesh.stockmanagement.Repository.ReviewRepo;
@Service
public class ReviewService {
    @Autowired
    public ReviewRepo rr;

    @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }

    // public void postreview(Review rm)
    // {
    //     rr.save(rm);
    // }
    // public List<Review> getreview()
    // {
    //     return rr.findAll();
    // }
    // public void deletereview(int rid)
    // {
    //     rr.deleteById(rid);
    // }

    public ResponseEntity<Review> postreview(Review campaign) {

    ResponseEntity<Review> responseEntity = restTemplate().postForEntity(
        "http://localhost:8081/postreview",
        campaign,
        Review.class);

    return responseEntity;
  }

  public List<Review> getAllReview() {
    ResponseEntity<List<Review>> responseEntity = restTemplate().exchange(
            "http://localhost:8081/getreview",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<Review>>() {});

    return responseEntity.getBody();
}
}
