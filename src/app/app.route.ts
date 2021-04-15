import { RouterModule, Routes} from "@angular/router";
import {NgModule} from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import {SearcherComponent} from './component/searcher/searcher.component';
const ROUTES: Routes=[
    {path:'', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'about', component:AboutComponent},
    {path:'product/:id', component:ProductComponent},
    {path:'search/:termino', component:SearcherComponent},
    {path:'**', component:HomeComponent}
];
export const APP_ROUTING=RouterModule.forRoot(ROUTES);
