import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  fkwd:String = 'assets/img/logo_fkwd.png'; 
  // image_url:String = 'assets/img/products/aardbei.jpg';
  
  @Input() productItem!: Product
  constructor(
    private msg: MessengerService, 
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })

  }

}