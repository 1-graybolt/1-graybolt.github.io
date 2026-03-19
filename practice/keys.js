const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');


let x=0;
let vx=6;
let y=0;
let vy=4;
let gravity=1;

function animate(){
ctx.clearRect(0,0,800,800);

    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(animate);
}
animate();

//event handler
function handlekeyDown(e){
    if(e.key=="ArrowDown");{
    y=y+vy;
    }
    if(e.key=="ArrowUp"){
    y=y-vy;
    }
    if(e.key=="ArrowRight"){
    y=y+vy;
    }
    if(e.key=="ArrowLeft"){
    y=y-vy;
    }
}

//event listener
document.addEventListener('keydown',handlekeyDown);
