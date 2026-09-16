const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const coin = document.querySelector(".coin");

const gameOver = document.querySelector(".game-over");
const restartButton = document.querySelector(".restart-button");
const finalScore = document.querySelector(".final-score");

let score = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const coinPosition = coin.offsetLeft;

  if (
    coinPosition < mario.offsetLeft + mario.offsetWidth &&
    coinPosition + coin.offsetWidth > mario.offsetLeft &&
    marioPosition > 50
  ) {
    score++;

    document.querySelector(".score span").innerHTML = score;

    coin.style.display = "none";

    setTimeout(() => {
      coin.style.display = "block";
    }, 1000);
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);

    gameOver.style.display = "flex";
    finalScore.innerHTML = score;
  }
}, 10);

document.addEventListener("keydown", jump);
restartButton.addEventListener("click", () => {
  location.reload();
});
