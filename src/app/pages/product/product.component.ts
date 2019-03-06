import { Component, OnInit } from '@angular/core';

import { Product } from '../../public/models/product'

import { ProductService } from  '../../public/services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = new Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  save(){    
    this.productService.saveProduct(this.product)
    .subscribe(data => {
      console.log('retorn api', data);
    })
  }

  delete(){

  }

}
