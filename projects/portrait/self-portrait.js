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

