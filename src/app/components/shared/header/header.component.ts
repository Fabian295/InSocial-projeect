import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
// import { Product } from 'src/app/models/product';
// import { CartComponent } from '../../shopping-cart/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myfk:String = 'assets/img/logo_fk.png';
  cart:String  = 'assets/img/cart_green-circle.png';
  // @Input() cartItem: any

  public totalItem : number = 0
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(res=> {
      this.totalItem = res.length
      console.log(res.length)
    })
  }

  // getQty(product: Product) {
  //   console.log(product.qty)
  // }
}
