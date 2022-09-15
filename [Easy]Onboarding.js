while (true) {
  var enemy1 = readline();
  var enemy1_distance = parseInt(readline());
  var enemy2 = readline();
  var enemy2_distance = parseInt(readline());

  if (enemy1_distance < enemy2_distance) {
    print(enemy1);
  } else {
    print(enemy2);
  }
}
