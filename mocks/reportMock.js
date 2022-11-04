import { faker } from "@faker-js/faker";

export const generateFakeReportCard = () => ({
  month: faker.date.weekday(),
  itemsSold: faker.datatype.number({ max: 100 }),
  income: faker.datatype.float(),
  returns: faker.datatype.number({ max: 10 })
});

export const generateFakeCardList = (N) => {
  const reportCards = [];

  [...Array(N).keys()].forEach((card, index) => {
    const item = {
      id: index,
      ...generateFakeReportCard()
    };
    reportCards.push(item);
  });

  return reportCards;
};
