import Player from './player';

export default class Players {
  constructor(players) {
    this.gamePlayers = players.map((name) => new Player(name));
  }

  get players() {
    return this.gamePlayers;
  }

  get playerNames() {
    return this.players.map((player) => player.name);
  }

  canPlayGame(numberOfPlayers) {
    if (numberOfPlayers % 2 === 0
      && numberOfPlayers >= 4
      && numberOfPlayers <= 6) {
      return true;
    }
    return false;
  }
}
