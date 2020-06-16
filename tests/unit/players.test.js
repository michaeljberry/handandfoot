import Players from '@/resources/players';

const players = [
  'Michael',
  'Megan',
  'Garrett',
  'Rachelle',
];
const newPlayers = new Players(players);

const correctNumberOfPlayers = [4, 6];
const incorrectNumberOfPlayers = [3, 5, 7];

it('You can only play a game with 4 or 6 players', () => {
  for (let i = 0; i < correctNumberOfPlayers.length; i++) {
    expect(newPlayers.canPlayGame(correctNumberOfPlayers[i])).toBe(true);
  }
  for (let i = 0; i < incorrectNumberOfPlayers.length; i++) {
    expect(newPlayers.canPlayGame(incorrectNumberOfPlayers[i])).toBe(false);
  }
});

it('This game includes the players: Michael, Megan, Garrett & Rachelle', () => {
  expect(newPlayers.playerNames).toEqual(players);
  expect(newPlayers.canPlayGame(players.length)).toBe(true);
});
