const easyTimerPointsDecreaseAmount = 20;
const mediumTimerPointsDecreaseAmount = 50;
const hardTimerPointsDecreaseAmount = 100;
const XDTimerPointsDecreaseAmount = 1000;

let timerPoints = 10000;
const baseTimerPoints = 10000;
const timerPointsIncreaseAmount = 500;

let baseTimerPointsDecreaseAmount = mediumTimerPointsDecreaseAmount;
const timerIntervalValue = 50;
const levelMultiplier = 1.05;

function updateTimeBar() {
    timeBarProgress.setAttribute("style", `width:${100 - (timerPoints / baseTimerPoints) * 100}%`);
}

function startTimerInterval() {
    return setInterval(handleTimer, timerIntervalValue);
}

function stopTimerInterval() {
    clearInterval(timerInterval);
}

function increaseTimerPoints() {
    timerPoints += timerPointsIncreaseAmount;
    if (timerPoints > baseTimerPoints) {
        timerPoints = baseTimerPoints;
    }
}

function decreaseTimerPoints() {
    timerPoints -= baseTimerPointsDecreaseAmount * levelMultiplier ** (points / 50);
}

function createTimeBar() {
    let bar = document.createElement("div");
    bar.setAttribute("class", "time-bar");
    let progress = document.createElement("div");
    progress.setAttribute("class", "time-bar-progress");
    bar.append(progress);

    return bar;
}

function updatePoints() {
    pointsElementHatch.innerHTML = points;
}

function createPointsElement() {
    const pContainerElement = document.createElement("div");
    pContainerElement.classList.add("pointsContainer");
    const pElement = document.createElement("span");
    pElement.classList.add("points");
    pElement.textContent = "0";
    pContainerElement.append(pElement);

    return pContainerElement;
}

function handleTimer() {
    console.log(timerPoints);
    if (points > 0) {
        decreaseTimerPoints();
        updateTimeBar();
        if (timerPoints <= 0) {
            endGame();
        }
    }
}

function createTopBar() {
    let bar = document.createElement("section");
    bar.setAttribute("class", "top-bar");

    bar.append(createTimeBar());
    bar.append(createPointsElement());
    return bar;
}
