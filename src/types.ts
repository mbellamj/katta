export interface IBook {
  name: string;
  price: number;
}

export interface IBasketItem<T> {
  item: T;
  quantity: number;
}
