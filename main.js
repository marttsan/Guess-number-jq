$(document).ready(function () {
  $(".guess").val(" ");
  let secretNumber = Math.trunc(Math.random() * 20 + 1);

  // change bellow line
  // $(".number").text(secretNumber);
  let score = 20;
  let highScore = 0;

  $(".check").click(() => {
    const guess = Number($(".guess").val());
    console.log(guess);
    if (!guess) {
      $(".message").text("Please Enter Number !!!");
    } else if (guess === secretNumber) {
      $(".message").text("Correct Number");
      $("body").css("backgroundColor", "#60b347");
      $(".number").text(secretNumber);
      $(".number").css("width", "30rem");

      if (score > highScore) {
        highScore = score;
        $(".highscore").text(highScore);
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        $(".message").text(guess > secretNumber ? "Too high !" : "Too low !");
        score--;
        $(".score").text(score);
      } else {
        $(".message").text("You lost the game !!!");
        $(".score").text(0);
      }
    }
  });

  $(".again").click(() => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    $(".message").text("Start guessing...");
    $(".number").text("?");
    $(".number").css("width", "15rem");
    $("body").css("background", "#222");
    $(".score").text(score);
    $(".guess").val(" ");
  });
});
