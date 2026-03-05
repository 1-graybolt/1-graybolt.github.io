"use strict";
function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log('test');
let yourName=prompt("what is your name");

addToBody("hi "+yourName);
*/

let temperature = prompt ("what is the temperature outside?");
addToBody("Its " + temperature + " degrees");
temperature=number(temperature);
addToBody("It's" + temperature + " degrees")

if (temperature <32) {
    addToBody("It's Freezing! Stay inside");
}else if (temperature >80){
    addToBody("Go for a walk");
}else {
    addToBody("Not Freezing");
}

addToBody("have a nice day!")


