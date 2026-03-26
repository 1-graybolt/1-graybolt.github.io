let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for(let y=0; y<=200; y+=100){
for (let x=25; x<725; x+=100){
    ctx.fillRect(x, y, 50, 25);
}
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for(let y = 100; y <= 800; y += 100){
for(let x = 25; x < 800; x += 100){
	if(y > x){
	ctx.fillRect(x, y, 50, 20);
	}
}
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 her
for(let y = 0; y < 800; y += 100){
for(let x = 0; x < 800; x += 100){
	if(y != x){
	ctx.fillRect(x, y, 50, 20);
}
}
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here
for(let y=0;y<=600;y+=200){
for(let x=0;x<=600;x+=200){
ctx.fillRect(x,y,100,100);
}
}
for(let y=100;y<=700;y+=200){
for(let x=100;x<=800;x+=200){
ctx.fillRect(x,y,100,100);
}
}


