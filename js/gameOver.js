function setUpBaseValues() {
    timerPoints = baseTimerPoints;
}

function resetValues() {
    points = 0;
}

function restart() {
    boardHatch.remove();
    resetValues();

    startGame();
}

function openMenu() {
    boardHatch.remove();
    createMainMenu();
}

function createGameOverMenu() {
    let gameOverMenuElement = document.createElement("section");
    gameOverMenuElement.classList.add("gameOverMenu");

    let gameOverSpan = document.createElement("span");
    gameOverSpan.textContent = "Game Over";
    gameOverMenuElement.append(gameOverSpan);

    let playAgainButton = document.createElement("button");
    playAgainButton.classList.add("gameover-menu-button");
    playAgainButton.setAttribute("onclick", "restart()");
    playAgainButton.textContent = "Play Again";

    let backtomenuButton = document.createElement("button");
    backtomenuButton.classList.add("gameover-menu-button");
    backtomenuButton.setAttribute("onclick", "openMenu()");
    backtomenuButton.textContent = "Menu";

    gameOverMenuElement.append(playAgainButton);
    gameOverMenuElement.append(backtomenuButton);

    boardHatch.append(gameOverMenuElement);
}

function endGame() {
    disableChopping();
    stopTimerInterval();
    changeTimbermanToGrave();
    console.log("game over");
    createGameOverMenu();
}

function endGameIfLost(side, blockType) {
    if (
        (blockType === "left-branch" && side === "left") ||
        (blockType === "right-branch" && side === "right")
    ) {
        endGame();
    }
}
