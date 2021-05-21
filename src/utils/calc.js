const INCREMENT = (n, max = Infinity) => (n < max ? n + 1 : n);

const DECREMENT = (n) => (n > 0 ? n - 1 : 0);

const SUM = (arrayOfNumbers) => arrayOfNumbers.reduce((acc, current) => acc + current, 0);

const ticketTotal = (ticket) => ticket.numberOfTicketsBought * ticket.price;

export {
  INCREMENT,
  DECREMENT,
  SUM,
  ticketTotal,
};
