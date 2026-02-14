//Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//background
ctx.fillStyle = "cyan";
ctx.fillRect(0,0,800,800)
//head
ctx.fillStyle = "#ae834b";
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
ctx.fillStyle = "#ae834b";
ctx.beginPath();
ctx.ellipse(250, 400, 30, 50, 0, 0, Math.PI * 2);
ctx.fill();
//left ear
ctx.beginPath();
ctx.ellipse(550, 400, 30, 50, 0, 0, Math.PI * 2);
ctx.fill();
//neck
ctx.fillStyle = "#ae834b";
ctx.fillRect(365, 590, 70, 80);
//body
ctx.fillStyle = "lightblue";
ctx.fillRect(320, 670, 160, 130);
// right arm
ctx.fillStyle = "lightblue";
ctx.fillRect(200, 670, 120, 30);
//left arm
ctx.fillRect(480, 670, 120, 30);
//hair
ctx.strokeStyle = "black";
ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(240, 350);
ctx.quadraticCurveTo(400, 50, 560, 350);
ctx.stroke();
//right hand
ctx.fillStyle = "#ae834b";
ctx.beginPath();
ctx.ellipse(200, 685, 15, 15, 0, 0, Math.PI * 2);
ctx.fill();
//left hand
ctx.beginPath();
ctx.ellipse(600, 685, 15, 15, 0, 0, Math.PI * 2);
ctx.fill();
// inside left ear circle
ctx.fillStyle = "#cfa06e";
ctx.beginPath();
ctx.ellipse(550, 400, 15, 30, 0, 0, Math.PI * 2);
ctx.fill();
// inside right ear circle
ctx.beginPath();
ctx.ellipse(250, 400, 15, 30, 0, 0, Math.PI * 2);
ctx.fill();
// right eyebrow
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(300, 320);
ctx.lineTo(340, 320);
ctx.stroke();
//left eyebrow
ctx.beginPath();
ctx.moveTo(460, 320);
ctx.lineTo(500, 320);
ctx.stroke();
  