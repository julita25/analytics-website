import { faker } from "@faker-js/faker";

export const generateFakeProduct = () => ({
  name: faker.commerce.product(),
  quantitySold: faker.datatype.number()

});

export const generateFakeProductList = (N) => {
  const productList = [];

  [...Array(N).keys()].forEach((card, index) => {
    const item = {
      id: index,
      ...generateFakeProduct()
    };
    productList.push(item);
  });

  return productList;
};
