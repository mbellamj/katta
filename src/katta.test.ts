import {
  BasketPriceCalculator,
  DiscountCalculator,
  calculateBasketPrice,
} from "./katta";
import {
  IBasketItem,
  IBasketPriceCalculator,
  IBook,
  IDiscountCalculator,
} from "./types";

// describe("function calculateBasketPrice", () => {
//   it("Should return the total cost of the basket", () => {
//     const basket: IBasketItem<IBook>[] = [
//       {
//         item: {
//           name: "First book",
//           price: 8,
//         },
//         quantity: 2,
//       },
//       {
//         item: {
//           name: "Second book",
//           price: 8,
//         },
//         quantity: 2,
//       },
//       {
//         item: {
//           name: "third book",
//           price: 8,
//         },
//         quantity: 2,
//       },
//       {
//         item: {
//           name: "fourt book",
//           price: 8,
//         },
//         quantity: 1,
//       },
//       {
//         item: {
//           name: "five book",
//           price: 8,
//         },
//         quantity: 1,
//       },
//     ];

//     const discounts: Record<number, number> = {
//       2: 0.05,
//       3: 0.1,
//       4: 0.2,
//       5: 0.25,
//     };

//     const indicator = 4;

//     expect(calculateBasketPrice(basket, discounts, indicator)).toEqual(51.2);
//   });
// });

describe("DiscountCalculator", () => {
  const discounts: Record<number, number> = {
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  };

  const price = 8;
  const quantity = 5;

  it(`should calculate the discounted price correctly for 2 differents items`, () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[2]
    );

    const discountedPrice = discountCalculator.calculateDiscountedPrice(
      price,
      quantity
    );

    expect(discountedPrice).toEqual(38);
  });

  it(`should calculate the discounted price correctly for 3 differents items`, () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[3]
    );

    const discountedPrice = discountCalculator.calculateDiscountedPrice(
      price,
      quantity
    );

    expect(discountedPrice).toEqual(36);
  });

  it(`should calculate the discounted price correctly for 4 differents items`, () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[4]
    );

    const discountedPrice = discountCalculator.calculateDiscountedPrice(
      price,
      quantity
    );

    expect(discountedPrice).toEqual(32);
  });

  it(`should calculate the discounted price correctly for 5 differents items`, () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[5]
    );

    const discountedPrice = discountCalculator.calculateDiscountedPrice(
      price,
      quantity
    );

    expect(discountedPrice).toEqual(30);
  });
});

describe("BasketPriceCalculator", () => {
  const discounts: Record<number, number> = {
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  };

  const basket: IBasketItem<IBook>[] = [
    { item: { name: "First book", price: 8 }, quantity: 2 },
    { item: { name: "Second book", price: 8 }, quantity: 2 },
    { item: { name: "third book", price: 8 }, quantity: 2 },
    { item: { name: "fourth book", price: 8 }, quantity: 1 },
    { item: { name: "fifth book", price: 8 }, quantity: 1 },
  ];

  it("should calculate the basket price correctly with discount for 2 differents items", () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[2]
    );
    const basketPriceCalculator: IBasketPriceCalculator =
      new BasketPriceCalculator(discountCalculator);

    const basketPrice = basketPriceCalculator.calculateBasketPrice(basket);

    expect(basketPrice).toEqual(60.8);
  });

  it("should calculate the basket price correctly with discount for 3 differents items", () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[3]
    );
    const basketPriceCalculator: IBasketPriceCalculator =
      new BasketPriceCalculator(discountCalculator);

    const basketPrice = basketPriceCalculator.calculateBasketPrice(basket);

    expect(basketPrice).toEqual(57.6);
  });

  it("should calculate the basket price correctly with discount for 4 differents items", () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[4]
    );
    const basketPriceCalculator: IBasketPriceCalculator =
      new BasketPriceCalculator(discountCalculator);

    const basketPrice = basketPriceCalculator.calculateBasketPrice(basket);

    expect(basketPrice).toEqual(51.2);
  });

  it("should calculate the basket price correctly with discount for 5 differents items", () => {
    const discountCalculator: IDiscountCalculator = new DiscountCalculator(
      discounts[5]
    );
    const basketPriceCalculator: IBasketPriceCalculator =
      new BasketPriceCalculator(discountCalculator);

    const basketPrice = basketPriceCalculator.calculateBasketPrice(basket);

    expect(basketPrice).toEqual(48);
  });
});
