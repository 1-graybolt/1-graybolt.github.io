function drawBall(){
				ctx.beginPath();
				ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
				ctx.fillStyle = "#0095DD";
				ctx.fill();
				ctx.closePath();
			}
			function drawPaddle(){
				ctx.beginPath();
				ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
				ctx.fillStyle = "#0095DD";
				ctx.fill();
				ctx.closePath();
			}
			function draw(){
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawBall();
				drawPaddle();
				if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
					dx = -dx;
				}
				if (y + dy > canvas.height - ballRadius || y + dy < ballRadius){
					dy = -dy;
				}
				x += dx;
				y += dy;
				if (rightPressed){
					paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
				}
				else if (leftPressed){
					paddleX = Math.max(paddleX - 7, 0);
				}
			}
			function startGame(){
				document.addEventListener("keydown", keyDownHandler);
				document.addEventListener("keyup", keyUpHandler);
				function keyDownHandler(e){
					if (e.key == "Right" || e.key == "ArrowRight"){
						rightPressed = true;
					}
					else if (e.key == "Left" || e.key == "ArrowLeft"){
						leftPressed = true;
					}
				}
				function keyUpHandler(e){
					if (e.key == "Right" || e.key == "ArrowRight"){
						rightPressed = false;
					}
					else if (e.key == "Left" || e.key == "ArrowLeft"){
						leftPressed = false;
					}
				}
				setInterval(draw, 10);
			}
			const runButton = document.getElementById("runButton");
			runButton.addEventListener("click", () => {
				startGame();
				runButton.disabled = true;
			});