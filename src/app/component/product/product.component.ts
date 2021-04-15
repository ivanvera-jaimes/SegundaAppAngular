import { Component, OnInit,Pipe } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  product: any={};
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService){
    this.activatedRoute.params.subscribe(params=>{
      this.product=this.productsService.getProduct(params['id']);
    });
  }
  ngOnInit(): void {
  }
}
