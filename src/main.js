document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
  let position = 2;
  let stepsMoved = 0;
  let stopTheCar = false;
  let cars = [];

  for (let i = 0; i < road.length; i++) {
    if (road[i] === "C") {
      cars.push(i);
    }
  }

  for (let i = 0; i < timeUnit; i++) {
    if (i === 5) {
      road[4] = road[4] === "G" ? "R" : "G";
      road[8] = road[8] === "R" ? "G" : "R";
    }

    if (i === 6) {
      road[4] = road[4] === "R" ? "G" : "R";
      road[8] = road[8] === "G" ? "R" : "G";
    }

    if (i === 10) {
      road[4] = road[4] === "G" ? "R" : "G";
      road[8] = road[8] === "R" ? "G" : "R";
    }

    if (i === 15) {
      road[4] = road[4] === "R" ? "G" : "R";
      road[8] = road[8] === "G" ? "R" : "G";
    }

    const nextPos = position + i;

    if (i <= 5 && stepsMoved < 5 && !stopTheCar) {
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

    if (i > 6 && stepsMoved < 5 && !stopTheCar) {
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

    if (i > 10 && stepsMoved < 5 && !stopTheCar) {
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

    console.log(`Ruta ${i + 1}:`, road);
  }
});
