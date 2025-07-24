document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
  let position = 3;
  let stepsMoved = 0;
  let stopTheCar = false;

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

    if (i < 5 && stepsMoved < 4 && !stopTheCar) {
      if (
        road[position + i] === "." ||
        road[position + i] === "G" ||
        road[position - 1] === "R"
      ) {
        road[position + i] = "C";
        road[position - 1] = ".";
      } else if (road[position + i] === "R") {
        road[position - 1];
        stopTheCar = true;
      }
    }

    if (i > 6 && stepsMoved < 4 && !stopTheCar) if (
        road[position + i] === "." ||
        road[position + i] === "G" ||
        road[position - 1] === "R"
      ) {
        road[position + i] = "C";
        road[position - 1] = ".";
      } else if (road[position + i] === "R") {
        road[position - 1];
        stopTheCar = true;
      }

    console.log(`Iteración ${i + 1}:`, road);
  }
});
