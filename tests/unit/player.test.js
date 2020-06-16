import Player from '@/resources/player';

const playerName = 'Michael';
const newPlayer = new Player(playerName);

it('The name of the player is: Michael', () => {
  expect(newPlayer.name).toBe(playerName);
});
