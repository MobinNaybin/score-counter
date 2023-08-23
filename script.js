const labelName1 = document.querySelector(".profile-name-1");
const labelName2 = document.querySelector(".profile-name-2");
const labelScore1 = document.querySelector("#score1");
const labelScore2 = document.querySelector("#score2");
const btnPoint1 = document.querySelector("#add-point1");
const btnPoint2 = document.querySelector("#add-point2");
const btnClear1 = document.querySelector("#clear-btn-1");
const btnClear2 = document.querySelector("#clear-btn-2");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

const player_1 = {
  name: prompt("Player1's Name?"),
  score: 0,
};
const player_2 = {
  name: prompt("Player2's Name?"),
  score: 0,
};

labelName1.textContent = player_1.name;
labelName2.textContent = player_2.name;

btnPoint1.addEventListener("click", function () {
  player_1.score++;
  labelScore1.textContent = `Score: ${player_1.score}`;
});

btnPoint2.addEventListener("click", function () {
  player_2.score++;
  labelScore2.textContent = `Score: ${player_2.score}`;
});

btnClear1.addEventListener("click", function () {
  player_1.score = 0;
  labelScore1.textContent = `Score: ${player_1.score}`;
});

btnClear2.addEventListener("click", function () {
  player_2.score = 0;
  labelScore2.textContent = `Score: ${player_2.score}`;
});

//`assets/profile/${Math.floor(Math.random() * 10) + 1}.png`;
