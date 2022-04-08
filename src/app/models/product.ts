export class Product {
  id: number;
  name: string;
  category: string;
  price: number;
  qty: number;
  image_url: string;

  constructor(id: number, name: string, category: string = '', price: number = 0, qty: number = 0, image_url: string = 'assets/img/products/appel.jpg') {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.qty = qty
    this.image_url = image_url
  }
}
