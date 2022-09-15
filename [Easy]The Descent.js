while (true) {
  mountainHeight = [];
  let highestMountainHeight = null;
  let highestMountainKey = null;

  for (let i = 0; i < 8; i++) {
    mountainHeight[i] = parseInt(readline());

    if (mountainHeight[i] > highestMountainHeight) {
      highestMountainHeight = mountainHeight[i];
      highestMountainKey = i;
    }
  }

  print(highestMountainKey);
}
