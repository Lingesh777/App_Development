package lingesh.review.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lingesh.review.Model.Review;
import lingesh.review.Service.Reviewservice;
@RestController
public class Reviewcontroller {
     @Autowired
    public Reviewservice rs;
    @GetMapping("/getreview")
    public List<Review> get()
    {
        return rs.getreview();
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
