package lingesh.review.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lingesh.review.Model.Review;
import lingesh.review.Repository.Reviewrepo;
@Service
public class Reviewservice {
     @Autowired
    public Reviewrepo rr;
    public ResponseEntity<Review> postreview(Review rm)
    {
        Review saved=rr.save(rm);
        return new ResponseEntity<>(saved,HttpStatus.CREATED);
    }
    public List<Review> getreview()
    {
        return rr.findAll();
    }
    public void deletereview(int rid)
    {
        rr.deleteById(rid);
    }
}
