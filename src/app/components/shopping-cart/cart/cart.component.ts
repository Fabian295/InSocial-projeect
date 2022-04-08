import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [] as any;
//   cartItems = [    
//     {id: 1, productId: 1, productName: 'Test 1', qty: 4,  price: 100},
//     {id: 2, productId: 3, productName: 'Test 2', qty: 7,  price: 50},
//     {id: 3, productId: 2, productName: 'Test 3', qty: 6,  price: 150},
//     {id: 4, productId: 4, productName: 'Test 4', qty: 2,  price: 200},
// ];

  cartTotal = 0

  constructor( 
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit() {

    // this.msg.getMsg().subscribe((product: any) => {
      
      // this.addProductToCart(product)
      // console.log(product, product.name)


    //  })
    this.handleSubscription();
    this.loadCartItems();
 }

 handleSubscription() {
  this.msg.getMsg().subscribe((product: any) => {
    // this.addProductToCart(product)
    this.loadCartItems();
  })
}

loadCartItems() {
  this.cartService.getCartItems().subscribe((items: CartItem[]) => {
    this.cartItems = items;
    this.calcCartTotal();
  })
}

 addProductToCart(product: Product) {

  let productExists = false

  for( let i in this.cartItems) {
    
    if(this.cartItems[i].productId  === product.id) {
      // console.log(product.id)
      this.cartItems[i].qty++
      productExists = true
      break;
    }
  }

  if(!productExists){
      this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1, 
      price: product.price 
    })
  }


// if(this.cartItems.length === 0){
//     this.cartItems.push({
//       productId: product.id,
//       productName: product.name,
//       qty: 1, 
//       price: product.price 
//     })

//     // this.cartTotal+= (product.qty * product.price)

//   } else {
//       for( let i in this.cartItems) {
    
//     if(this.cartItems[i].id  === product.id) {
//       console.log(product.id)
//       console.log(this.cartItems[i].id)
//       this.cartItems[i].qty++
// //       productExists = true
// //       break;
//    } else {
     
//      this.cartItems.push({       
//        productId: product.id,
//        productName: product.name,
//        qty: 1,
//        price: product.price
//      })
//    }

//   }
//   }

  // this.cartTotal = 0
  // this.cartItems.forEach((item: { productName: any; qty: number; price: number; }) => {
  //   console.log(item.productName)
  //   this.cartTotal += (item.qty * item.price);
  //   })

  this.calcCartTotal();
 }

 calcCartTotal() {
  this.cartTotal = 0
  this.cartItems.forEach((item: any) => {
    this.cartTotal += (item.qty * item.price)
  })
}

clear() {

  this.cartItems=[]
}

}
