document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
  let position = 2;
  let stepsMoved = 0;
  let stopTheCar = false;
  let cars = [];

   for (let i = 0; i < road.length; i++) {
    if (road[i] === "C") {
      cars.push({ initial: i, current: i });
    }
  }

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

    const nextPos = position + i;

    if (stepsMoved < 5 && !stopTheCar) {
      if (
        (road[nextPos] === "." || road[nextPos] === "G") &&
        road[nextPos] !== "C"
      ) {
        road[nextPos] = "C";
        road[position - 1] = ".";
        stepsMoved++;
      } else if (road[nextPos] === "R") {
        stopTheCar = true;
      }
    }

    console.log(road);
  }
});