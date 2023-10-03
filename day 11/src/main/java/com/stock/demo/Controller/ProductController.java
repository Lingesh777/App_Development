package com.stock.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.Model.Product;
import com.stock.demo.Service.ProductService;
@CrossOrigin("*")
@RestController
public class ProductController {
    @Autowired
    public ProductService ps;

    @GetMapping("/get/product")
    public List<Product> get()
    {
        return ps.getDetails();
    }
    @PostMapping("/post/product")
    public String post(Product pd)
    {
        ps.postDetails(pd);
        return "posted successfully";
    }
    @PutMapping("/update/{productid}")
    public String put(@RequestBody Product pd ,int productid)
    {
        pd.setProductid(productid);
        ps.updateDetails(pd);
        return "updated successfully";
    }
    @DeleteMapping("/delete/{productid}")
    public String del(@PathVariable int productid)
    {
        ps.delete(productid);
        return "Deleted Sucessfully";
    }
}
