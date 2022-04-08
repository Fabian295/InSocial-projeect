import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
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
