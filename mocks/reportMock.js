import { faker } from "@faker-js/faker";

export const generateFakeReportCard = (date) => ({
  sold: faker.datatype.number({ max: 100 }),
  sales: faker.datatype.float(),
  returns: faker.datatype.number({ max: 10 }),
  ...date
});

export const generateFakeWeeklyReportCards = () => {
  const reportCards = [];
  const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  [...Array(5).keys()].forEach((card, index) => {
    const item = {
      id: index,
      ...generateFakeReportCard({ dayOfTheWeek: daysOfTheWeek[index] })
    };
    reportCards.push(item);
  });

  return reportCards;
};

export const generateFakeMonthlyReportCards = () => {
  const reportCards = [];
  const months = [
    "Jan", "Feb", "March", "April", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  [...Array(12).keys()].forEach((card, index) => {
    const item = {
      id: index,
      ...generateFakeReportCard({ month: months[index] })
    };
    reportCards.push(item);
  });

  return reportCards;
};
