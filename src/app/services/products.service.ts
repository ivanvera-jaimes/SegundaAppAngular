import {Injectable} from '@angular/core';

export class ProductsService{
    private products: Product[]=[
            {
                name:'Macbook Air 2020',
                description:'Core I3- 8gb Ram- 256gb',
                img:'assets/img/Mac.jfif',
                price:'4.394.000'
            },
            {
                name:'Portatil HP 2020',
                description:'Amd atho',
                img:'assets/img/Hp.jfif',
                price:'4.000.000'
            },
            {
                name:'Lenovo ideapad L340',
                description:'I5 900hc- 8gb Ram-512gb',
                img:'assets/img/Lenovo.jfif',
                price:'3.452.000'
            },
            {
                name:'Samsung',
                description:'Core I9- 8gb Ram- 256gb',
                img:'assets/img/Samsung.jfif',
                price:'1.294.000'
            }
        ];
    constructor(){
        console.log('service runnig');
    }
    getProducts(){
        return this.products;
    }
    getProduct(idx){
        return this.products[idx];
    }
    searchProduct(termino: string){
        let productsArr: Product[]=[];
        termino=termino.toLowerCase();
        for(let product of this.products){
          let name=product.name.toLowerCase();
          if(name.indexOf(termino)>=0){
            productsArr.push(product);
          }
        }
        return productsArr;
      }
}
export interface Product{
    name: string;
    description: string;
    img: string;
    price: string;
}