interface Product {
  _id: string;
  name: string;
  in_stock: boolean;
  price: number;
  created_at: Date;
  image?: string;
  flavors: string[];
  category: string;
}

interface ProductInCart extends Product {
  quantity: number;
  selectedFlavors: string[];
}
