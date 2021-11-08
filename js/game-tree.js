function disableChopping() {
    document.removeEventListener("keydown", handleKeyDown);
}

function getCurrentBlockType() {
    return treeHatch.lastChild.previousSibling.classList[1];
}

function addNewBlock() {
    let block = createBlock();
    treeHatch.prepend(block);

    console.log("block added");
}

function removeLastBlock() {
    treeHatch.lastChild.remove();

    console.log("last block removed");
}

function setBlockType(blockTypeNumber) {
    if (blockTypeNumber <= 500) {
        return "no-branch";
    } else if (blockTypeNumber <= 1500) {
        return "left-branch";
    } else if (blockTypeNumber <= 2500) {
        return "right-branch";
    } else {
        console.log("Wrong number when setting block type. Returning 'no-branch'");
        return "no-branch";
    }
}

function createBlock(blockTypeNumber = createBlockTypeNumber()) {
    let block = document.createElement("div");
    block.setAttribute("class", `block ${setBlockType(blockTypeNumber)}`);
    console.log("created block");
    return block;
}

function createTree() {
    let tree = document.createElement("section");
    tree.setAttribute("class", "game-tree");

    tree.prepend(createBlock(0));

    for (let i = 0; i < 7; i++) {
        tree.prepend(createBlock());
    }

    console.log("tree created");
    return tree;
}
