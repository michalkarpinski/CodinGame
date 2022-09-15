/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var n = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var l = parseInt(inputs[1]); // the number of links
var e = parseInt(inputs[2]); // the number of exit gateways

var n1 = new Array();
var n2 = new Array();
var eI = new Array();

for (var i = 0; i < l; i++) {
    var inputs = readline().split(' ');
    n1[i] = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    n2[i] = parseInt(inputs[1]);
}

for (var i = 0; i < e; i++) {
    eI[i] = parseInt(readline()); // the index of a gateway node
}

// game loop
while (true) {
    var sI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    break1 = 0;
        
    for (var i = 0; i < n1.length; i++) {
        if (n1[i] == sI && n2[i] == eI[0]) {
            print(sI + ' ' +  eI[0]);
            break1 = 1;
            continue;
        }
        if (n1[i] == sI && n2[i] == eI[1]) {
            print(sI + ' ' +  eI[1]);
            break1 = 1;
            continue;
        }
        if (n1[i] == sI && n2[i] == eI[2]) {
            print(sI + ' ' +  eI[2]);
            break1 = 1;
            continue;
        }
        if (n2[i] == sI && n1[i] == eI[0]) {
            print(sI + ' ' +  eI[0]);
            break1 = 1;
            continue;
        }
        if (n2[i] == sI && n1[i] == eI[1]) {
            print(sI + ' ' +  eI[1]);
            break1 = 1;
            continue;
        }
        if (n2[i] == sI && n1[i] == eI[2]) {
            print(sI + ' ' +  eI[2]);
            break1 = 1;
            continue;
        }
    }
    
    if (break1 == 1) {
        continue;
    }
    
    print(eI[0] + ' ' + ( n2[n1.lastIndexOf(eI[0])] || n1[n2.lastIndexOf(eI[0])]));
 
}