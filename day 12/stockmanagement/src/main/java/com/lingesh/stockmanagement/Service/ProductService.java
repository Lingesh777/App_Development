package com.lingesh.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lingesh.stockmanagement.Model.Product;
import com.lingesh.stockmanagement.Repository.ProductRepo;

@Service
public class ProductService {
    @Autowired
    public ProductRepo pr;

    public List<Product> getProduct()
    {
        return pr.findAll();
    }
    public String postProduct(Product pp)
    {
        pr.save(pp);
        return "posted successfully";
    }
    public String updateProduct(Product pp)
    {
        pr.save(pp);
        return "updated successfully";
    }
    public String deleteProduct(int pid)
    {
        pr.deleteById(pid);
        return "deleted";
    }
}
