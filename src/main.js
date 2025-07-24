document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
  let position = 2;
  let stepsMoved = 0;
  let stopTheCar = false;

  for (let i = 0; i < timeUnit; i++) {
    if (i < 5 && stepsMoved < 4 && !stopTheCar) {
      if (road[position + i] === "." || road[position + i] === "G") {
        road[position + i] = "C";
        road[position - 1] = ".";
      } else if (road[position + i] === "R") {
        stopTheCar = true;
      }
    }

    if (i > 6 && stepsMoved < 9 && !stopTheCar) {
      console.log("asdasd", i);
    } else if (road[position + i] === "R") {
      stopTheCar = true;
    }

    console.log(`Iteración ${i + 1}:`, road);

    if (i === 4) {
      console.log("Estamos en la quinta iteración");
      console.log("Elemento en la posición 4 de road:", road[4], road[8]);
    }
  }
});
