import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];

  constructor(private productsServices: ProductsService, private router: Router){
    this.products=this.productsServices.getProducts();
    console.log(this.products);
  }

  ngOnInit(): void {
  }
  viewProduct(idx: number){
    this.router.navigate(['/product',idx])
  }
}
