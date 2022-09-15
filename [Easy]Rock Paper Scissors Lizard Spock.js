const N = parseInt(readline());
let tournament = [];
let nextRound = 0;
tournament[nextRound] = [];

const signs = {
    C: { name: 'Scissors', winWith: ['P', 'L'] },
    P: { name: 'Papper', winWith: ['R', 'S'] },
    R: { name: 'Rock', winWith: ['L', 'C'] },
    L: { name: 'Lizard', winWith: ['S', 'P'] },
    S: { name: 'Spock', winWith: ['C', 'R'] }
}

for (let i = 0; i < N; i++) {
    let inputs = readline().split(' ');
    let player = {
        id: parseInt(inputs[0]),
        sign: inputs[1],
        defeatedOpponents: []
    };
    tournament[nextRound].push(player);
}

const battle = () => {
    let roundTotalMatches = tournament[nextRound].length / 2;
    let currentRound = nextRound;
    nextRound++;
    tournament[nextRound] = [];

    for (let match = 0; match < roundTotalMatches; match++) {
        let player1 = tournament[currentRound][match * 2];
        let player2 = tournament[currentRound][match * 2 + 1];
        let winPlayer, losePlayerID;

        if (signs[player1.sign].winWith.includes(player2.sign)) { // player 1 wins
            winPlayer = player1;
            losePlayerID = player2.id;
        } else if (signs[player2.sign].winWith.includes(player1.sign)) { // player 2 wins
            winPlayer = player2;
            losePlayerID = player1.id;
        } else { // tie
            if (player1.id < player2.id) {
                winPlayer = player1;
                losePlayerID = player2.id;
            } else {
                winPlayer = player2;
                losePlayerID = player1.id;
            }
        }

        winPlayer.defeatedOpponents.push(losePlayerID);
        tournament[nextRound].push(winPlayer);
    }

    if (tournament[nextRound].length > 1) {
        battle();
    }
}

battle();

let winner = tournament.pop()[0];
let winnerID = winner.id;
let winnerOpponents = winner.defeatedOpponents.join(' ');

console.log(winnerID);
console.log(winnerOpponents);
