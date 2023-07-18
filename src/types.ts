export interface IBook {
  name: string;
  price: number;
}

export interface IBasketItem<T> {
  item: T;
  quantity: number;
}

export interface IDiscountCalculator {
  calculateDiscountedPrice(price: number, quantity: number): number;
}

export interface IBasketPriceCalculator {
  calculateBasketPrice(basket: IBasketItem<IBook>[]): number;
}
