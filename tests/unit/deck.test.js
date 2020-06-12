import Deck from '@/resources/deck';

const newDeck = new Deck();
it('Ensures a Deck of cards has 54 cards, including Jokers', () => {
  expect(newDeck.deck.length).toBe(54);
});

const expectedSuits = ['heart', 'diamond', 'club', 'spade'];
it('Ensures a deck of cards has the correct suits', () => {
  expect(newDeck.suits).toEqual(expectedSuits);
});

const fivePointValueCards = [4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8];
it('Ensure that all cards between 8 and black 3s are worth 5 points', () => {
  expect(newDeck.fivePointCards).toEqual(fivePointValueCards);
});

console.log(newDeck.tenPointCards);
const tenPointValueCards = [9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13];
it('Ensure that all cards over a 9 are worth 10 points', () => {
  expect(newDeck.tenPointCards).toEqual(tenPointValueCards);
});

const twentyPointValueCards = [1, 2, 1, 2, 1, 2, 1, 2];
it('Ensure that Aces and wilds (2s) are worth 20 points', () => {
  expect(newDeck.twentyPointCards).toEqual(twentyPointValueCards);
});

const fiftyPointValueCards = [0, 0];
it('Ensure that Jokers are worth 50 points', () => {
  expect(newDeck.fiftyPointCards).toEqual(fiftyPointValueCards);
});

const negativeFiftyPointValueCards = [3, 3];
it('Ensure that red 3s are worth -50 points', () => {
  expect(newDeck.negativeFiftyPointCards).toEqual(negativeFiftyPointValueCards);
});

const nineOfHearts = newDeck.cardByName(9, 'heart');
it('A card is created with a suit, rank and value', () => {
  expect(nineOfHearts.suit).toBe('heart');
  expect(nineOfHearts.rank).toBe(9);
  expect(nineOfHearts.points).toBe(10);
  expect(nineOfHearts.color).toBe('red');
});
