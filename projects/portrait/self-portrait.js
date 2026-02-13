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
ctx.fillStyle = "white";
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
//outside eyes
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.ellipse(320, 350, 30, 30, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(480, 350, 30, 30, 0, 0, Math.PI * 2);
ctx.stroke();