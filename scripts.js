function updateNames() {
  // Get the names from the input boxes
  let player1 = document.getElementById("player1Name").value;
  let player2 = document.getElementById("player2Name").value;

  // Check if both names were entered
  if (player1 === "" || player2 === "") {
    alert("Please enter both player names!");
    return;
  }

  // Change the player labels
  document.getElementById("player1Label").textContent = player1;
  document.getElementById("player2Label").textContent = player2;
}


function rollDice() {
  // Generate random numbers from 1 to 6
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Change the dice images
  document.querySelector(".img1").src =
    "images/dice" + randomNumber1 + ".png";

  document.querySelector(".img2").src =
    "images/dice" + randomNumber2 + ".png";

  // Get player names
  let player1 = document.getElementById("player1Label").textContent;
  let player2 = document.getElementById("player2Label").textContent;

  // Decide the winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent =
      player1 + " Wins! 🎉";
  } 
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent =
      player2 + " Wins! 🎉";
  } 
  else {
    document.querySelector("h1").textContent =
      "Draw! 🤝";
  }
}