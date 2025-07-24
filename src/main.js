document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  // calle
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];
  // calle limpia
  let underCar = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."];

  // for para la unidad de tiempo
  for (let i = 0; i < timeUnit; i++) {
    // manejo de semáforos
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
    // copio los caminos para actualizar valores y evitar conflicto
    const newRoad = [...road];
    const newUnderCar = [...underCar];

    // for para mover los autos
    road.forEach((street, index) => {
      // capturo el index de cada auto y le asigno el valor a su proxima posicion
      if (street === "C") {
        const currentPosition = index;
        const nextPosition = currentPosition + 1;
        // mover auto

        if (nextPosition < road.length) {
          const nextStreet = road[nextPosition];

          if (nextStreet === "." || nextStreet === "G") {
            // guardo lo que esta debajo del auto
            newUnderCar[nextPosition] = road[nextPosition];
            newRoad[nextPosition] = "C";

            // devuelvo el valor que habia antes que pasara por encima el auto
            newRoad[currentPosition] = underCar[currentPosition];
            newUnderCar[currentPosition] = ".";
          }
        }
      }
    });

    // actualizo el estado
    road = newRoad;
    underCar = newUnderCar;

    console.log(road);
  }
});
