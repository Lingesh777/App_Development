package lingesh.review.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lingesh.review.Model.Review;



@Repository
public interface Reviewrepo extends JpaRepository<Review,Integer> {
    
}
