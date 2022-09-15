var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var thorX = parseInt(inputs[2]); // Thor's starting X position
var thorY = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
  let directionX = "";
  let directionY = "";

  if (thorX > lightX) {
    directionX = "W";
    thorX--;
  } else if (thorX < lightX) {
    directionX = "E";
    thorX++;
  }

  if (thorY > lightY) {
    directionY = "N";
    thorY--;
  } else if (thorY < lightY) {
    directionY = "S";
    thorY++;
  }

  print(directionY + directionX);
}
