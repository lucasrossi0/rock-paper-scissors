/*
function getPlayerChoice() {
  var data = document.getElementById("input").value;
  return data.toLowerCase();
}
*/
function getComputerChoice() {
  var list = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  return list[random];
}

function singleRound(player, computer) {
  if (player == computer) return "Its a tie";
  else if (player == "rock" && computer == "scissors") return "Player wins";
  else if (player == "paper" && computer == "rock") return "Player wins";
  else if (player == "scissors" && computer == "paper") return "Players wins";
  else return "Computer wins";
}
/*
function showResults(result) {
  var p = document.getElementById("result");
  p.innerText = result;
}

function test()     {
  var button = document.getElementById("button");
  var playerInput = getPlayerChoice();
  var computerInput = getComputerChoice();
  var result = singleRound(playerInput, computerInput);
  button.addEventListener("click", showResults(result));
}
*/
var t1 = "rock";
var r1 = singleRound(t1, getComputerChoice());
console.log(r1);

for (let i = 0; i < 5; i++) {
  let input = prompt("rock, paper, scissors: ");
  var r1 = singleRound(input, getComputerChoice());
  console.log(r1);
}
