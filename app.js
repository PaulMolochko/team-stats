const team ={
    _players: [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
        },
        {
            firstName: 'Robert',
            lastName: 'Stock',
            age: 19,
        },
        {
            firstName: 'James',
            lastName: 'Smith',
            age: 21,
        },
    ],
    
    _games: [
        {
            opponents: 'Hawks',
            teamPoints: 42,
            opponentPoints: 45,
        },
        {
            opponents: 'Badgers',
            teamPoints: 50,
            opponentPoints: 39,
        },
        {
            opponents: 'Toucants',
            teamPoints: 32,
            opponentPoints: 32,
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer: function(firstName, lastName, age){
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        return this._players.push(player);
    },
    addGame: function(opponents, teamPoints, opponentPoints) {
        const game = {
            opponents,
            teamPoints,
            opponentPoints,
        };
        return this._games.push(game);
    },
};

team.addPlayer(`Steph`, `Curry`, 28);
team.addPlayer(`Lisa`, `Leslie`, 44);
team.addPlayer(`Bugs`, `Bunny`, 76);
console.table(team.players);

team.addGame(`Elephants`,35,32);
team.addGame(`Cocatriels`,31,49);
team.addGame(`Grasshoppers`,35,32);
console.table(team.games);