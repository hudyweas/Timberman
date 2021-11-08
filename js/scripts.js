"use strict";

const wrapper = document.querySelector(".wrapper");

let points = 0,
    boardHatch,
    treeHatch,
    leftTimbermanHatch,
    rightTimbermanHatch,
    pointsElementHatch,
    timeBarProgress,
    timerInterval,
    lastTimbermanSide;

createMainMenu();
