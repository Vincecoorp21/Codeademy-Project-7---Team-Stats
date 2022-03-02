let team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    },
    {
      firstName: 'Juan',
      lastName: 'Domingo',
      age: 9,
    },
    {
      firstName: 'Pepe',
      lastName: 'Modric',
      age: 10,
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Madrid',
      teamPoints: 88,
      opponentPoints: 45,
    },
    {
      opponent: 'Barcelona',
      teamPoints: 99,
      opponentPoints: 55,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

// team.addPlayer('Steph', 'Curry', 28);
// team.addPlayer('Lisa', 'Leslie', 44);
// team.addPlayer('Bugs', 'Bunny', 76);

// console.log(team._players);

team.addGame('Atletico', 99, 87);

console.log(team._games);
