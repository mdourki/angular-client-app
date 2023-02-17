import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsObservable!: Observable<Array<Product>>;
  productsList!: Product[]; 

  constructor(private productService : ProductService ) {}

  ngOnInit() {
    this.getProducts();
    this.fetchProducts();
  }

  getProducts() {
    this.productsObservable =  this.productService.findAll()
  }
  
  fetchProducts() {
    this.productService.fetchProducts()
    .subscribe( result => this.productsList = result._embedded.products) /* console.log(result._embedded.products[1])) */
  }

}
