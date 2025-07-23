document.addEventListener("DOMContentLoaded", () => {
  const timeUnit = 16;
  let road = ["C", "C", "C", ".", "G", ".", ".", ".", "R", ".", ".", "."];

  for (let i = 0; i < timeUnit; i++) {
    console.log(road);
    if (i === 4) {
      console.log("Estamos en la quinta iteración");
      console.log("Elemento en la posición 4 de road:", road[i]);
    }
  }
});
