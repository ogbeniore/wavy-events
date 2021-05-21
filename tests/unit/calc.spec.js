import {
  INCREMENT,
  DECREMENT,
  SUM,
  ticketTotal,
} from '../../src/utils/calc';

// dcrement tests
test('Should reduce a number by one', () => {
  const testNumber = 5;
  const reducedTestNumber = DECREMENT(testNumber);
  expect(reducedTestNumber).toBe(testNumber - 1);
});

test('Should not reduce number when its 0', () => {
  const testNumber = 0;
  const reducedTestNumber = DECREMENT(testNumber);
  expect(reducedTestNumber).toBe(testNumber);
});

// increment tests
test('Should increase a number by one', () => {
  const testNumber = 5;
  const increasedTestNumber = INCREMENT(testNumber);
  expect(increasedTestNumber).toBe(testNumber + 1);
});

test('Should not increment past max number ', () => {
  const testNumber = 8;
  const increasedTestNumber = INCREMENT(testNumber, 8);
  expect(increasedTestNumber).toBe(testNumber);
});

// tickets total price
test('Should get ticket total price', () => {
  const ticket = {
    numberOfTicketsBought: 2,
    price: 50,
  };
  const ticketTotalPrice = ticketTotal(ticket);
  expect(ticketTotalPrice).toBe(ticket.numberOfTicketsBought * ticket.price);
});

// sum an array of numbers
test('Should add all numbers in an array', () => {
  const arrayOfNumbers = [5, 6, 20];
  const total = SUM(arrayOfNumbers);
  expect(total).toBe(31);
});
