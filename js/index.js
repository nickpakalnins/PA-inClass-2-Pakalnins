function showA() {
  const cardA = document.getElementById("cardA");
  if (cardA.style.visibility === "hidden") {
    cardA.style.visibility = "visible";
  } else {
    cardA.style.visibility = "hidden";
  }
}

function showB() {
  const cardB = document.getElementById("cardB");
  if (cardB.style.visibility === "hidden") {
    cardB.style.visibility = "visible";
  } else {
    cardB.style.visibility = "hidden";
  }
}

function showC() {
  const cardC = document.getElementById("cardC");
  if (cardC.style.visibility === "hidden") {
    cardC.style.visibility = "visible";
  } else {
    cardC.style.visibility = "hidden";
  }
}

function hideA() {
  if (cardA.style.visibility === "visible") {
    cardA.style.visibility = "hidden";
  } else {
    cardA.style.visibility = "visible";
  }
}

function hideB() {
  if (cardB.style.visibility === "visible") {
    cardB.style.visibility = "hidden";
  } else {
    cardB.style.visibility = "visible";
  }
}

function hideC() {
  if (cardC.style.visibility === "visible") {
    cardC.style.visibility = "hidden";
  } else {
    cardC.style.visibility = "visible";
  }
}
