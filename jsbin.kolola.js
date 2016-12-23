var cardFlavor = ["Kloor", "Spar", "Rude", "Hjerter"];

function random() {
  return Math.round(Math.random()*4);
}

function counter() {
  if (random() === 1) {
    document.write("Kloor");
  } else if (random() === 2) {
    document.write("Spar");
  } else if (random() === 3) {
    document.write("Rude");
  } else {
    document.write("Hjerter");
  }
}


for(var i = 1; i = 1; i++) {
  counter(); document.write(" ")
}