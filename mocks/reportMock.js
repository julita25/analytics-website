import { faker } from "@faker-js/faker";

export const generateFakeReportCard = (day) => ({
  dayOfTheWeek: day,
  itemsSold: faker.datatype.number({ max: 100 }),
  income: faker.datatype.float(),
  returns: faker.datatype.number({ max: 10 })
});

export const generateFakeReportCardList = (N) => {
  const reportCards = [];
  const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  [...Array(N).keys()].forEach((card, index) => {
    const item = {
      id: index,
      ...generateFakeReportCard(daysOfTheWeek[index])
    };
    reportCards.push(item);
  });

  return reportCards;
};
