let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerO starts

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [6, 4, 2],
    [6, 7, 8],
    [2, 5, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations! Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winningpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return;
        }
    }
};

// Add event listeners for buttons
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
