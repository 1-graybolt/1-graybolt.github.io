//Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//background
ctx.fillStyle = "cyan";
ctx.fillRect(0,0,800,800)
//hair
ctx.fillStyle = "black";
ctx.beginPath();
ctx.ellipse(400, 300, 150, 200, 0, 0, Math.PI * 2);
ctx.fill();
//face
ctx.fillStyle = "lightbrown";
ctx.beginPath();
ctx.ellipse(400, 400, 100, 150, 0, 0, Math.PI * 2);
ctx.fill();
//eyes
ctx.fillStyle = "Black";
ctx.beginPath();
ctx.ellipse(350, 350, 20, 10, 0, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(450, 350, 20, 10, 0, 0, Math.PI * 2);
ctx.fill();
//nose
ctx.beginPath();
ctx.moveTo(400, 370);
ctx.lineTo(380, 410);
ctx.lineTo(420, 410);
ctx.closePath();
ctx.fill();
