const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ballRadius = 10;

const balls=[];

for(let i=0;i<100;i+=1){
//make a JavaScript ball object
const ball={
  x:Math.random()*800,
  y:Math.random()*800,
  dx:2,
  dy:-2
};
//add the ball to the array
balls.push(ball);
}

let x2 = Math.random()*800;
let y2 = Math.random()*800;

let dx2 = 2;
let dy2 = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 4;
const brickColumnCount = 5;
const brickWidth = 100;
const brickHeight = 20;
const brickPadding = 30;
const brickOffsetTop = 30;
const brickOffsetLeft = 70;


function drawBricks(){
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
        ctx.fillRect(brickOffsetLeft+c*(brickWidth+brickPadding), brickOffsetTop+r*(brickHeight+brickPadding), brickWidth, brickHeight);
      //TODO: use the variables above to write the code that draws the bricks.
      //this should be a single function call to ctx.fillRect();
    }
  }
}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBall() {
  for(const ball of balls){
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
}

if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ballRadius || ball.y + ball.dy > canvas.height - ballRadius) {
    ball.dy = -ball.dy;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  for(const ball of balls){
    ball.x += ball.dx;
    ball.y += ball.dy;
  }
  ball.x += ball.dx;
  ball.y += ball.dy;
  y2 += dy2;

  for(const ball of balls){
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }}
  if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
    dy = -dy;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  //move the ball
  ball.x += ball.dx;
  ball.y += ball.dy;

  x2 += dx2;
  y2 += dy2;
  requestAnimationFrame(draw);


draw()