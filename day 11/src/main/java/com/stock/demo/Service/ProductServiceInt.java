package com.stock.demo.Service;

import java.util.List;

import com.stock.demo.Model.Product;

public interface ProductServiceInt {
    public List<Product> getDetails();
    public void postDetails(Product pd);
    public void updateDetails(Product pd);
    public void delete(int productid);
    
}
