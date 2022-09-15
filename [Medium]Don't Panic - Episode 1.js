var inputs = readline().split(' ');
var exitPos = parseInt(inputs[4]); // position of the exit on its floor
var nbElevators = parseInt(inputs[7]); // number of elevators
elevatorFloor=[];
elevatorPos=[];
elevatorPos[nbElevators] = parseInt(inputs[4]);
currentFloor=0;

for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    elevatorFloor[i] = parseInt(inputs[0]); // floor on which this elevator is found
    elevatorPos[elevatorFloor[i]] = parseInt(inputs[1]); // position of the elevator on its floor
}

for (;;) {
    [F,P,D] = readline().split(' ');
    
    if ((P - elevatorPos[F] > 0 && D == "RIGHT") || (P - elevatorPos[F] < 0 && D == "LEFT")) {
        print('BLOCK');
    } else {
        print('WAIT');
    }
}