function setGraveImage(e) {
    e.classList.add("grave");
}

function changeTimbermanToGrave() {
    document.querySelectorAll(".timberman").forEach(setGraveImage);
}

function switchTimberman() {
    leftTimbermanHatch.classList.toggle("hidden");
    rightTimbermanHatch.classList.toggle("hidden");
}

function switchTimbermanIfNeeded(side) {
    if (side !== lastTimbermanSide) {
        switchTimberman();
        lastTimbermanSide = side;
    }
}

function createTimbermanSection() {
    let timbermanSections = document.createElement("section");
    timbermanSections.setAttribute("class", "timbermans");

    let left_timberman = document.createElement("div");
    left_timberman.setAttribute("class", "timberman left-timberman");

    let right_timberman = document.createElement("div");
    right_timberman.setAttribute("class", "timberman right-timberman hidden");

    let middle_block = document.createElement("div");
    middle_block.setAttribute("class", "block middle-timberman");

    timbermanSections.append(left_timberman);
    timbermanSections.append(middle_block);
    timbermanSections.append(right_timberman);

    return timbermanSections;
}
