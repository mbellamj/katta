import {
  IBasketItem,
  IBasketPriceCalculator,
  IBook,
  IDiscountCalculator,
} from "./types";

export class DiscountCalculator implements IDiscountCalculator {
  constructor(private readonly discount: number) {}

  /**
   * @method calculateDiscountedPrice This method take the item price and its quantity then calculate the discounted price
   * @param price the item price
   * @param quantity the quantity
   * @returns the discounted price
   */
  public calculateDiscountedPrice(price: number, quantity: number): number {
    return price * quantity * (1 - this.discount);
  }
}

export class BasketPriceCalculator implements IBasketPriceCalculator {
  constructor(private readonly discountCalculator: IDiscountCalculator) {}

  /**
   * @method calculateBasketPrice This method take a basket and calculate the total cost of the basket
   * @param basket an array of basket items
   * @returns the total cost of the basket
   */
  public calculateBasketPrice(basket: IBasketItem<IBook>[]): number {
    let basketPrice = 0;

    for (const basketItem of basket) {
      const { item, quantity } = basketItem;
      const discountedPrice = this.discountCalculator.calculateDiscountedPrice(
        item.price,
        quantity
      );
      basketPrice += discountedPrice;
    }

    return Math.round(basketPrice * 100) / 100;
  }
}
