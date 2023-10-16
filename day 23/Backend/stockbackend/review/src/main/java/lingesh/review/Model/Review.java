package lingesh.review.Model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="reviewdata")
public class Review {
     @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int rid;
    private String username;
    private String yourcomments;
    private int rateforservice;
    private int rateforproduct;
    private int ratefordelivery;
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false, updatable = false)
    private Date createdAt;
     @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }
}
