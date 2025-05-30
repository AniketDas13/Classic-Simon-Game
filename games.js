var level = 0;
var count = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    $("h1").text("Level " + ++level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    new Audio("sounds/" + randomChosenColour + ".mp3").play();

    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

}

function checkAnswer(currentCount) {

    if (gamePattern[currentCount - 1] !== userClickedPattern[currentCount - 1]) {
        $("h1").text("Game Over, Press Any Key to Restart");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");;
        }, 100);

        new Audio("sounds/wrong.mp3").play();

        level = 0;
        count = 0;
        gamePattern = [];
        userClickedPattern = [];
    }

    if (currentCount === level) {
        setTimeout(function () {
            count = 0;
            userClickedPattern = [];
            nextSequence();
        }, 1000)
    }

}

function onButtonClick(buttonColour) {

    count++;

    $("#" + buttonColour).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonColour).removeClass("pressed");
    }, 100);

    new Audio("sounds/" + buttonColour + ".mp3").play();

    var userChosenColour = $("#" + buttonColour).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);

    checkAnswer(count);

}

$(document).on("keydown", function () {
    if (level === 0) {
        nextSequence();
    }
})

$("#green").click(function () {
    onButtonClick("green");
})

$("#red").click(function () {
    onButtonClick("red");
})

$("#yellow").click(function () {
    onButtonClick("yellow");
})

$("#blue").click(function () {
    onButtonClick("blue");
})