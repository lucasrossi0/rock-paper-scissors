/*
function getPlayerChoice() {
  var data = document.getElementById("input").value;
  return data.toLowerCase();
}
*/

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


var t1 = "rock";
var r1 = singleRound(t1, getComputerChoice());
console.log(r1);

for (let i = 0; i < 5; i++) {
  let input = prompt("rock, paper, scissors: ");
  var r1 = singleRound(input, getComputerChoice());
  console.log(r1);
}
*/

function getComputerChoice() {
  var list = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  return list[random];
}

function singleRound(player, computer) {
  if (s_p1 == 5) {
    result.innerText = `Player wins the game`;
    return 0;
  } else if (s_c == 5) {
    result.innerText = `Computer wins the game`;
    return 0;
  } else if (player == computer) {
    result.innerText = `Its a tie, score is player: ${s_p1} computer ${s_c}`;
  } else if (player == "rock" && computer == "scissors") {
    s_p1 += 1;
    result.innerText = `Player scores, the score is player: ${s_p1} computer ${s_c}`;
  } else if (player == "paper" && computer == "rock") {
    s_p1 += 1;
    result.innerText = `Player scores, the score is player: ${s_p1} computer ${s_c}`;
  } else if (player == "scissors" && computer == "paper") {
    s_p1 += 1;
    result.innerText = `Player scores, the score is player: ${s_p1} computer ${s_c}`;
  } else {
    s_c += 1;
    result.innerText = `Computer scores, the score is player: ${s_p1} computer ${s_c}`;
  }
}
var s_c = 0;
var s_p1 = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
result.innerText = `Start game by pressing a button`;

rock.addEventListener("click", () => {
  singleRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  singleRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  singleRound("scissors", getComputerChoice());
});
