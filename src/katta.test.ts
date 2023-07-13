import { calculateBasketPrice } from "./katta";
import { IBasketItem, IBook } from "./types";

describe("function calculateBasketPrice", () => {
  it("Should return the total cost of the basket", () => {
    const basket: IBasketItem<IBook>[] = [
      {
        item: {
          name: "First book",
          price: 8,
        },
        quantity: 2,
      },
      {
        item: {
          name: "Second book",
          price: 8,
        },
        quantity: 2,
      },
      {
        item: {
          name: "third book",
          price: 8,
        },
        quantity: 2,
      },
      {
        item: {
          name: "fourt book",
          price: 8,
        },
        quantity: 1,
      },
      {
        item: {
          name: "five book",
          price: 8,
        },
        quantity: 1,
      },
    ];

    const discounts: Record<number, number> = {
      2: 0.05,
      3: 0.1,
      4: 0.2,
      5: 0.25,
    };

    const indicator = 4;

    expect(calculateBasketPrice(basket, discounts, indicator)).toEqual(51.2);
  });
});
