package com.lingesh.stockmanagement.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private int pid;
    private String pname;
    private String pimage;
    private String pcategory;
    private int pprice;
    private String pavailable;
    private int quantity;
}
