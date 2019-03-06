import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  saveProduct(product) {
    return this.http.post('http://localhost:3000/create/product',  product )
  }

}
