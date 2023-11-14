// package com.lingesh.stockmanagement.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.lingesh.stockmanagement.Model.Orders;
// import com.lingesh.stockmanagement.Model.Product;
// import com.lingesh.stockmanagement.Model.User;
// import com.lingesh.stockmanagement.Repository.OrderRepo;
// import com.lingesh.stockmanagement.dto.request.ProductDto;
// import java.util.List;
// import java.util.ArrayList;

// @Service
// public class OrderService {
//     @Autowired
//     public OrderRepo or;

//     public Orders postorder(List<ProductDto> productdto)
//     {
//         Orders order=new Orders();
//         List<Product> list=new ArrayList<>();
//         for(ProductDto prod:productdto)
//         {
//             Product product=new Product();
//             product.setPavailable(prod.getPavailable());
//             product.setPcategory(prod.getPcategory());
//             product.setPid(prod.getPid());
//             product.setPname(prod.getPname());
//             product.setPimage(prod.getPimage());
//             product.setPprice(prod.getPprice());
//             // product.setQuantity(prod.getQuantity());

//             list.add(product);
//         }
//         order.setOrderprod(list);
//     }
// }
