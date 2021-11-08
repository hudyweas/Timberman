const mainMenuElements = [
    ["Singleplayer", "startFirstGame()"],
    ["Multiplayer", ""],
    ["Settings", "createSettingsMenu()"],
];

const settingsElements = [
    ["Change difficulty", "createDifficultyMenu()"],
    ["Change skins", "createChangeSkinsMenu(changeSkinElements)"],
    ["Back", "back(mainMenuElements)"],
];

const difficultyElements = [
    ["Easy", "changeTo('easy')"],
    ["Normal", "changeTo('medium')"],
    ["Hard", "changeTo('hard')"],
    ["XD", "changeTo('XD')"],
    ["Back", "back(settingsElements)"],
];

const changeSkinElements = [
    ["Minecraft", "changeSkin('mc')"],
    ["Another skin", "changeSkin('another')"],
    ["Back", "back(settingsElements)"],
];

function changeCustomSkin() {
    // @ts-ignore
    const skinType = document.querySelector(".skin-change").value;
    // @ts-ignore
    const userUrl = document.querySelector(".user-skin").value;
    switch (skinType) {
        case "log":
            break;
        case "leaves":
            break;
        case "char":
            break;
        case "grave":
            break;
        case "top-backg":
            break;
        case "bot-backg":
            break;
    }
}

function changeSkin(skinType) {
    let fileName;
    switch (skinType) {
        case "mc":
            fileName = "minecraft-skin.css";
            break;
        case "another":
            fileName = "another-skin.css";
            break;
    }

    document.querySelector(".skin").setAttribute("href", `css/${fileName}`);
}

function createChangeSkinsMenu(ulElements) {
    removeMenu();
    createMenu(ulElements);
}

function changeTo(mode) {
    switch (mode) {
        case "easy":
            baseTimerPointsDecreaseAmount = easyTimerPointsDecreaseAmount;
            break;
        case "medium":
            baseTimerPointsDecreaseAmount = mediumTimerPointsDecreaseAmount;
            break;
        case "hard":
            baseTimerPointsDecreaseAmount = hardTimerPointsDecreaseAmount;
            break;
        case "XD":
            baseTimerPointsDecreaseAmount = XDTimerPointsDecreaseAmount;
            break;
        default:
            "Wrong mode in changing difficulty";
            break;
    }

    createSettingsMenu();
}

function createDifficultyMenu() {
    removeMenu();

    createMenu(difficultyElements);
}

function createSettingsMenu() {
    removeMenu();

    createMenu(settingsElements);
}

function createMainMenu() {
    createMenu(mainMenuElements);
}

function back(lastSettings) {
    document.querySelector(".main-menu").remove();
    createMenu(lastSettings);
}

function removeMenu() {
    document.querySelector(".main-menu").remove();
}

function createMenuListElement(text, fn) {
    let li = document.createElement("li");
    li.setAttribute("class", "main-menu-list-element");

    let button = document.createElement("button");
    button.textContent = text;
    button.setAttribute("onclick", fn);

    li.append(button);
    return li;
}

function createMenuList(ulElements) {
    let ul = document.createElement("ul");
    ul.setAttribute("class", "main-menu-list");

    for (let i = 0; i < ulElements.length; i++) {
        ul.append(createMenuListElement(ulElements[i][0], ulElements[i][1]));
    }

    return ul;
}

function createMenu(ulElements) {
    let menu = document.createElement("section");
    menu.setAttribute("class", "main-menu");
    let ul = createMenuList(ulElements);

    menu.append(ul);
    wrapper.append(menu);
}

function startFirstGame() {
    document.querySelector(".main-menu").remove();
    startGame();
}
