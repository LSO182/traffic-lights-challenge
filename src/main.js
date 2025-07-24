document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];

  for (let i = 0; i < timeUnit; i++) {
    if (i === 5) {
      if (road[4] === "G") road[4] = "O";
      if (road[8] === "R") road[8] = "O";
    }
    if (i === 6) {
      if (road[4] === "O") road[4] = "R";
      if (road[8] === "O") road[8] = "G";
    }
    if (i === 11) {
      if (road[4] === "R") road[4] = "O";
      if (road[8] === "G") road[8] = "O";
    }
    if (i === 12) {
      if (road[4] === "O") road[4] = "G";
      if (road[8] === "O") road[8] = "R";
    }
    if (i === 17) {
      if (road[4] === "G") road[4] = "O";
      if (road[8] === "R") road[8] = "O";
    }
    if (i === 18) {
      if (road[4] === "O") road[4] = "R";
      if (road[8] === "O") road[8] = "G";
    }

    let newRoad = [...road];

    road.forEach((street, index) => {
      if (street === "C") {
        const currentPosition = index;
        const nextPosition = currentPosition + 1;

        if (nextPosition < road.length) {
          const nextStreet = road[nextPosition];

          if (nextStreet === "." || nextStreet === "G") {
            newRoad[nextPosition] = "C";
            newRoad[currentPosition] = ".";
            console.log(`Moviendo C de ${currentPosition} a ${nextPosition}`);
          } else {
            console.log(`C en ${currentPosition} no puede avanzar. Siguiente: ${nextStreet}`);
          }
        }
      }
    });

    road = newRoad;

    console.log(road)
  }
});
