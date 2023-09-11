// this function makes a ball with position and velocity set

function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
  ball = document.createElement("div");
  ball.style.backgroundColor = color;
  ball.className = "ball";
  ball.style.height = ball.style.width = size;
  ball.style.top = ycoord;
  ball.style.left = xcoord;
  document.body.appendChild(ball);
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    x.push(xcoord);
    y.push(ycoord);
    velocity_x.push(velx);
    velocity_y.push(vely);
  }
}

const size = 30;
const x = [];
const y = [];
const velocity_x = [];
const velocity_y = [];
const balls = [];
let speed = 0;
let xmouse, ymouse;
let totalFactoryOutput = 0;
// To track ball we create a new ball every time it is moved.
// The position of the old ball is used as base for new position
// However this won't quite work if we call factory multiple times
// creating different numbers of balls.
// Can you make it work more generally?
function update() {
  let nballs = balls.length;
  // total length of this array
  // we need to start at totalFactorOutput from the end
  let focus = nballs - totalFactoryOutput;
  for (let i = focus; i < nballs; i++) {
    x[i] += Math.random() * 20 - 10 + speed;
    y[i] += Math.random() * 20 - 10;
    makeBall(x[i], y[i], balls[i].style.backgroundColor);
  }

  // change this if you want to paint faster
  setTimeout(update, 10); // this calls update ever 1/10 second
}
// Can you update this so we can paint with more colors?
function randomColor() {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[Math.floor(Math.random() * 5)];
}
function factory(total) {
  let start = 300;
  for (let i = 0; i < total; i++) {
    makeBall(start, start, randomColor());
  }
  totalFactoryOutput += total;
}
var mouse = function (e) {
  ymouse = e.clientY;
  xmouse = e.clientX;
  makeBall(xmouse, ymouse, randomColor());
  totalFactoryOutput++; // one more made
};
if (window.addEventListener) {
  document.addEventListener("mousedown", mouse, false);
}

//collision detection
function collisiondetection(balls,randomColor,Run){
  if (balls)

}

