//Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//background
ctx.fillStyle = "cyan";
ctx.fillRect(0,0,800,800)
//head
ctx.fillStyle = "tan";
ctx.beginPath();
ctx.ellipse(400, 400, 150, 200, 0, 0, Math.PI * 2);
ctx.fill(); 
// right eyes
ctx.fillStyle = "White";
ctx.beginPath();
ctx.ellipse(320, 350, 20, 20, 0, 0, Math.PI * 2);
ctx.fill(); 
// left eyes
ctx.beginPath();
ctx.ellipse(480, 350, 20, 20, 0, 0, Math.PI * 2);
ctx.fill();
//right pupil
ctx.fillStyle = "black";
ctx.beginPath();
ctx.ellipse(320, 350, 10, 10, 0, 0, Math.PI * 2);
ctx.fill();
//left pupil
ctx.beginPath();
ctx.ellipse(480, 350, 10, 10, 0, 0, Math.PI * 2);
ctx.fill();
//nose
ctx.fillStyle="Black";
ctx.beginPath();
ctx.moveTo(400, 400); 
ctx.lineTo(380, 450); 
ctx.lineTo(420, 450);
ctx.stroke(); 
//mouth
ctx.beginPath();
ctx.arc(400, 500, 50, 0, Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();
//right ear
ctx.fillStyle = "tan";
ctx.beginPath();
ctx.ellipse(250, 400, 30, 50, 0, 0, Math.PI * 2);
ctx.fill();
//left ear
ctx.beginPath();
ctx.ellipse(550, 400, 30, 50, 0, 0, Math.PI * 2);
ctx.fill();
//neck
ctx.fillStyle = "tan";
ctx.fillRect(365, 590, 70, 80);
//body
ctx.fillStyle = "lightblue";
ctx.fillRect(320, 670, 160, 130);
// right arm
ctx.fillStyle = "lightblue";
ctx.fillRect(200, 670, 120, 30);
//left arm
ctx.fillRect(480, 670, 120, 30);
