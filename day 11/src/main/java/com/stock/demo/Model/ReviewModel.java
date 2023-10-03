package com.stock.demo.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="reviewdetails")
public class ReviewModel {
    @Id
    private int rid;
    private String review;
    private double rating;

    LocalDateTime ld;

}
