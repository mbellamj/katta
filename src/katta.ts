import { IBasketItem, IBook } from "./types";

/**
 * @method calculateBasketPrice This method take a basket, the discounts rules, an indicator,
 * apply the best discount and calculate the total cost of the basket
 * @param basket
 * @param discounts
 * @param indicator this represent the pricing model vector which indicate what should be the best discount
 * @returns the total cost of the basket
 */
export function calculateBasketPrice(
  basket: IBasketItem<IBook>[],
  discounts: Record<number, number>,
  indicator: number
): number {
  let basketPrice = 0,
    i = 0;
  // We make a copy of the basket ensuring that we shouldn't have reference issue using property basket later
  let basketClone = Array.from(basket);

  const discount = discounts[indicator];

  while (i <= indicator && basketClone.length >= indicator) {
    // We filter books using the predicate quantity is greater than 0
    basketClone = basketClone.filter((book) => book.quantity > 0);

    // We apply the discount to the book set price and add it to the total cost
    basketPrice += indicator * basketClone[i].item.price * (1 - discount);

    // We reduce the quantities of books in the basket for the current set
    basketClone = basketClone.map((book) => ({
      ...book,
      quantity: Math.max(book.quantity - 1, 0),
    }));
  }

  return basketPrice;
}
