import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  products: any[]=[];
  termino: string;
  constructor(private productsService: ProductsService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
      this.activatedRoute.params.subscribe(params=>{
        this.termino=params['termino'];
        this.products=this.productsService.searchProduct(params['termino']);
      });
    });
  }

  ngOnInit(): void {
  }

}
