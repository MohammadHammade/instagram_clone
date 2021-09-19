const { random } = require("lodash");

function createTrackingBall(color = "#fff") {
    let ball = document.createElement('div');
    ball.classList.add("tracking-ball")
    ball.style.width = 30 + "px";
    ball.style.height = 30 + "px";
    ball.style.borderRadius = 50 + "%";
    ball.style.backgroundColor = color;
    ball.style.position = "absolute";
    ball.style.top = -1000 + "px";
    ball.style.left = -1000 + "px";
    ball.style.transition = "all 0.08s linear";

    let x = random() * 10;
    let y = random() * 10;

    ball.setAttribute('x', x);
    ball.setAttribute('y', y);
    document.body.appendChild(ball);
}

// createTrackingBall("#f00");
createTrackingBall("rgba(255,255,255,0.5");

// console.log(document.getElementsByClassName("tracking-ball"));
document.onmousemove = function(e) {
    let arr = document.getElementsByClassName("tracking-ball");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.left = e.clientX - arr[i].getAttribute('x') + "px";
        arr[i].style.top = e.clientY - arr[i].getAttribute('y') + "px";
    }
}