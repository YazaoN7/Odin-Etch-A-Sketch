let container = document.getElementById("container");
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
        console.log(e.key);
    };
}

function draw({ key }) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function eraseCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function() {
        canvas.classList.remove("shake");
    },
    { once: true }
    );
}

shakebutton.addEventListener("click", eraseCanvas);

window.addEventListener("keydown", handleKey);

