var round = 0;
var cards1 = new Array();
var cards2 = new Array();
var card1ori = new Array();
var card2ori = new Array();

var n = parseInt(readline()); // the number of cards for player 1
for (var i = 0; i < n; i++) {
    cards1[i] = readline(); // the n cards of player 1
}

var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
    cards2[i] = readline(); // the m cards of player 2
}

function replaceCard(card) {
    switch (card) {
        case "A":
            return 14;
            break;
        case "K":
            return 13;
            break;
        case "Q":
            return 12;
            break;
        case "J":
            return 11;
            break;
        default:
            return card;
    }
}

function prepareCard(card) {
    printErr("prepareCard: " + card);
    card = card.substr(0, card.length -1);
    card = parseInt(replaceCard(card));
    return card;
}

while (true) {
    
    // put cards
    card1ori.push(cards1.shift());
    card2ori.push(cards2.shift());
    
    printErr("card1ori: " + card1ori);
    printErr("card2ori: " + card2ori);
    
    
    // prepare cards
    card1 = prepareCard(card1ori[card1ori.length - 1]);
    card2 = prepareCard(card2ori[card2ori.length - 1]);
    
    
    // compare cards
    if (card1 == card2) {
        card1ori.push(cards1.shift());
        card1ori.push(cards1.shift());
        card1ori.push(cards1.shift());
        card2ori.push(cards2.shift());
        card2ori.push(cards2.shift());
        card2ori.push(cards2.shift());
        result = "PAT";
        printErr("PAT");
    }
    else if (card1 < card2) {
        cards2 = cards2.concat(card1ori);
        cards2 = cards2.concat(card2ori);
        card1ori = [];
        card2ori = [];
        result = "P2";
        printErr("WIN 2");
    
        round++;
    }
    else {
        cards1 = cards1.concat(card1ori);
        cards1 = cards1.concat(card2ori);
        card1ori = [];
        card2ori = [];
        result = "P1";
        printErr("WIN 1");
    
        round++;
    }
    
    printErr("round: " + round);
    printErr("result: " + result);
    printErr("P1: " + cards1.length);
    printErr("P2: " + cards2.length);
    printErr("--- ---");
    
    if (result == "PAT" && (cards1.length <= 0 || cards2.length <= 0)) {
        print('PAT');
        break;
    }
    else if (cards1.length <= 0) {
        winPlayer = 2;
        print(winPlayer + ' ' + round);
        break;
    }
    else if (cards2.length <= 0) {
        winPlayer = 1;
        print(winPlayer + ' ' + round);
        break;
    }
}
