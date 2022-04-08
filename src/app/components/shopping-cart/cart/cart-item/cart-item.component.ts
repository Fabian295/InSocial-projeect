import { Component, OnInit, Input } from '@angular/core';
import { publishLast } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  plus() {
    console.log('clicked')
    this.cartItem.qty++

    this.cartService.addProductToCart(this.cartItem)
    // CartComponent.cartTotal += (this.cartItem.price)
    // console.log(CartComponent.cartTota)
  }

  itn: any = [];
  i: number = 0;
  minus() {
    console.log('clicked')
    if(this.cartItem.qty > 0){

      this.cartItem.qty--

      // this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      //   console.log(items)
      // })


    }
    if(this.cartItem.qty < 1) {
      this.cartService.getCartItems().subscribe((items: CartItem[]) => {
        // console.log(cartItem)
        items.forEach((fruity) => {
          this.itn.push(fruity)
          // console.log(this.itn);
          this.i = this.itn.length - 1
          console.log(this.i)
        })
        this.itn.splice(CartItem, 1)
        this.itn[this.i]
        items = this.itn
        console.log(items)
        return items;
      })
    }
    return
  }
}
