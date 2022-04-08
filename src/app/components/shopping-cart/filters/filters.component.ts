import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  productList: Product[] = []
  public filterCategory : any
  searchKey:string ="";

  constructor(private productService : ProductService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    // console.log(this.productService.getProducts());
   this.productService.getProducts().subscribe((products) => {
    this.productList = products;
    });

    this.cartService.search.subscribe(val => {
      this.searchKey = val;
    })
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
