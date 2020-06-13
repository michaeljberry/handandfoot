import Pile from '@/resources/pile';

const numberOfPlayers = 4;
const numberOfDecksNeeded = numberOfPlayers + 1;
const newPile = new Pile(numberOfPlayers);

it('The number of decks in a pile equal the number of players plus 1', () => {
  expect(newPile.pile.length).toBe(numberOfDecksNeeded * 54);
});

it('A shuffled pile has the same number of cards it started with', () => {
  newPile.thoroughlyShuffle();
  expect(newPile.pile.length).toBe(numberOfDecksNeeded * 54);
});
