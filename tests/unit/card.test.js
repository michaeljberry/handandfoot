import Card from '@/resources/card';

const newCard = new Card({
  rank: 1,
  points: 20,
  name: 'ace',
  color: 'red',
  suit: 'heart',
});

it('Ace of hearts is worth 20 points', () => {
  expect(newCard.points).toBe(20);
});

it('The suit for an ace of hearts is, well, hearts', () => {
  expect(newCard.suit).toBe('heart');
});
