import deck from '@/resources/deck';

test('Ensures a Deck of cards has 56 cards, including Jokers', () => {
  expect(deck.fullDeckIncludingJokers()).toBe(56);
});
const expectedSuits = ['heart', 'diamond', 'club', 'spade'];
test('Ensures a deck of cards has the correct suits', () => {
  expect(Object.keys(deck.suits)).toEqual(expectedSuits);
});

const fivePointValueCards = [
  ['4', '5', '6', '7', '8'],
  ['4', '5', '6', '7', '8'],
  ['3', '4', '5', '6', '7', '8'],
  ['3', '4', '5', '6', '7', '8'],
];
test('Ensure that all cards between 8 and black 3s are worth 5 points', () => {
  expect(deck.pointValueCards(5)).toEqual(fivePointValueCards);
});

const tenPointValueCards = [
  ['9', '10', '11', '12', '13'],
  ['9', '10', '11', '12', '13'],
  ['9', '10', '11', '12', '13'],
  ['9', '10', '11', '12', '13'],
];
test('Ensure that all cards over a 9 are worth 10 points', () => {
  expect(deck.pointValueCards(10)).toEqual(tenPointValueCards);
});

const twentyPointValueCards = [
  ['1', '2'],
  ['1', '2'],
  ['1', '2'],
  ['1', '2'],
];
test('Ensure that Aces and wilds (2s) are worth 20 points', () => {
  expect(deck.pointValueCards(20)).toEqual(twentyPointValueCards);
});

const fiftyPointValueCards = [
  ['0'],
  ['0'],
  ['0'],
  ['0'],
];
test('Ensure that Jokers are worth 50 points', () => {
  expect(deck.pointValueCards(50)).toEqual(fiftyPointValueCards);
});

const negativeFiftyPointValueCards = [
  ['3'],
  ['3'],
  [],
  [],
];
test('Ensure that red 3s are worth -50 points', () => {
  expect(deck.pointValueCards(-50)).toEqual(negativeFiftyPointValueCards);
});
