import Hand from '@/resources/hand';
import Deck from '@/resources/deck';
import Book from '@/resources/book';

const newDeck = new Deck();
const cards = [
  newDeck.cardByName(1, 'heart'),
  newDeck.cardByName(7, 'club'),
  newDeck.cardByName(2, 'spade'),
  newDeck.cardByName(8, 'heart'),
  newDeck.cardByName(5, 'heart'),
  newDeck.cardByName(13, 'spade'),
  newDeck.cardByName(3, 'diamond'),
  newDeck.cardByName(6, 'club'),
  newDeck.cardByName(7, 'diamond'),
  newDeck.cardByName(1, 'diamond'),
  newDeck.cardByName(10, 'diamond'),
  newDeck.cardByName(8, 'club'),
  newDeck.cardByName(1, 'club'),
  newDeck.cardByName(0),
];
const newHand = new Hand(cards);

it('A hand must have 14 cards', () => {
  expect(newHand.hand.length).toBe(14);
});

cards.sort(newHand.sortTheCards);
it('A hand can be sorted by rank', () => {
  expect(newHand.hand.sort(newHand.sortTheCards)).toBe(cards);
});
