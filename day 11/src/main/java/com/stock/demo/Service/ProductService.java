package com.stock.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.Model.Product;
import com.stock.demo.Repository.ProductRepo;

@Service
public class ProductService implements ProductServiceInt {
    @Autowired
    private ProductRepo pr;

    @Override
    public List<Product> getDetails()
    {
        return pr.findAll();
    }
    @Override
    public void postDetails(Product pd)
    {
        pr.save(pd);
    }
    @Override
    public void updateDetails(Product pd)
    {
        pr.save(pd);
    }
    @Override
    public void delete(int productid)
    {
        pr.deleteById(productid);
    }
}
