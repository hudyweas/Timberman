let createBlockTypeNumber = () => Math.round(Math.random() * 2500);

function startGame() {
    createBoard();
    declareQuery();
    setUpBaseValues();
    timerInterval = startTimerInterval();
    lastTimbermanSide = "left";
}

function createBoard(container = wrapper) {
    let board = document.createElement("section");
    board.setAttribute("class", "board");
    board.append(createTopBar());
    board.append(createMainGameSection());
    container.append(board);
    document.addEventListener("keydown", handleKeyDown);
}

function createMainGameSection() {
    let main = document.createElement("section");
    main.setAttribute("class", "mainGameSection");

    main.append(createTree());
    main.append(createTimbermanSection());

    return main;
}

function createLevelInfo() {
    let box = document.createElement("div");
    box.setAttribute("class", "level-info");
    box.textContent = `Level ${points / 50 + 1}`;

    boardHatch.append(box);
    window.setTimeout(() => document.querySelector(".level-info").remove(), 1000);
}

function handleKeyDown(e) {
    const keyCode = e.keyCode;
    const blockType = getCurrentBlockType();

    increaseTimerPoints();
    updateTimeBar();

    switch (keyCode) {
        case 65:
        case 37:
            endGameIfLost("left", blockType);
            switchTimbermanIfNeeded("left");
            break;
        case 68:
        case 39:
            endGameIfLost("right", blockType);
            switchTimbermanIfNeeded("right");
            break;
        default:
            return 0;
    }
    removeLastBlock();
    addNewBlock();
    points++;
    if (points % 50 === 0) {
        createLevelInfo();
    }
    updatePoints();
}

function declareQuery() {
    boardHatch = document.querySelector(".board");
    treeHatch = document.querySelector(".game-tree");
    leftTimbermanHatch = document.querySelector(".left-timberman");
    rightTimbermanHatch = document.querySelector(".right-timberman");
    pointsElementHatch = document.querySelector(".points");
    timeBarProgress = document.querySelector(".time-bar-progress");
}
