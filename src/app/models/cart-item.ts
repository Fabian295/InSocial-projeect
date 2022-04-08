import { Product } from "./product";

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  category: string;
  price: number;
  qty: number;

  constructor(id: number, product: Product, category: string, price: number, qty = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.category = product.category;
    this.price = product.price;
    this.qty = product.qty;
  }
}
