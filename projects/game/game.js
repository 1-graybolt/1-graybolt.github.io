let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let nokey = true;
let havekey = false;
let minutes = 0;

function check_time() {
    if (!gameActive) return;

    minutes++;

    if (minutes >= 16) {
        gameActive = false;
        print("Time is up! you died not knowing the truth! click refresh to restart the game.");
    
    }else{
    let timeRemaining = 16 - minutes;
    clear(); 
    print("The time remaining is " + timeRemaining + " minutes.");
}
}
//If you need, add any "helper" functions here

//Make one function for each location
function bedroom() {
    clear();
    check_time();
    print("\nYou wake up in your bedroom");
    print("\nthis wasn't where you remember going to sleep...");
    print("\nBang!");
    print("\nevery alarm goes off, you only have 15 minutes to evacuate hurry.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\thallway");

function processInput(input){
    if (input.toLowerCase() === "hallway") {
        hallway();
    } else {
        stayHere();
        waitThenCall(bedroom);
    }
}
waitForInput(processInput);
}

function hallway() {
    clear();
    check_time();
    print("\nEverything is super dark you turn on the lights and realized there is 4 ways to go.")
            print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tbedroom" + "\n\tkitchen" + "\n\tlivingroom" + "\n\trestroom" );
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            bedroom();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        } else if (input.toLowerCase() === "livingroom") {
            livingroom();
        } else if (input.toLowerCase() === "restroom") {
            restroom();
        } else {
            stayHere();
            waitThenCall(hallway);
        }
    }
    waitForInput(processInput);
}

function kitchen() {
    clear();
    check_time();
    print("\nYou are in the kitchen, you smell blood and you decide its best to get out of here.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\thallway");

    function processInput(input){
        if (input.toLowerCase() === "hallway") {
            hallway();
        } else {
            stayHere();
            waitThenCall(kitchen);
        }
    }
    waitForInput(processInput);
}

function livingroom() {
    clear();
    check_time();
    print("\nYou are in the living room, you see that all the tables are flipped and the whole place is a mess, you decide to get out of here.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\thallway"+ "\n\tsecondhallway");

    function processInput(input){
        if (input.toLowerCase() === "hallway") {
            hallway();
        } else if (input.toLowerCase() === "secondhallway") {
            secondhallway();
        } else {
            stayHere();
            waitThenCall(livingroom);
        }
    }
    waitForInput(processInput);
}


function secondhallway() {
    clear();
    check_time();
    print("\nYou are in the second hallway. you feel a chill run down your spine because this wasn't where you remember going to sleep...");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tlivingroom" + "\n\tsecondbedroom" + "\n\tdoor");
    function processInput(input){
        if (input.toLowerCase() === "livingroom") {
            livingroom();
        } else if (input.toLowerCase() === "secondbedroom") {
            secondbedroom();
        } else if (input.toLowerCase() === "door") {
            door();
        } else {
            stayHere();
            waitThenCall(secondhallway);
        }
    }
    waitForInput(processInput);
}
function door() {
    clear();
    check_time();
    print("\nYou are at the door, you try to open it but its locked, you look around and see a note on the floor, you pick it up and read it, it says 'the key is where very person goes not the bedroom somewhere else'.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tsecondhallway" );
    if (nokey === true) {
    function processInput(input){
        if (input.toLowerCase() === "secondhallway") {
            secondhallway();
        } else {
            stayHere();
            waitThenCall(door);
        }
    }
    waitForInput(processInput);
}else if (havekey === true) {
    clear();
    print("\nYou are at the door, you use the key to open the door and when you open the door you wake up in your bed, you escaped the nightmare, to restart the game refresh the page.");
    gameActive = false; 
}
}
function secondbedroom() {
    clear();
    check_time();
    print("\nYou are in the 2nd bedroom, the place is dark you see a flash light you pick it up  and turned it on");
    print("\nWhere do you want to go next to escape? Say one of these choices:" + "\n\trestroom" + "\n\tsecondhallway");
    function processInput(input){
        if (input.toLowerCase() === "restroom") {
            restroom();
        } else if (input.toLowerCase() === "secondhallway") {
            secondhallway();
        } else {
            stayHere();
            waitThenCall(secondbedroom);
        }
    }
    waitForInput(processInput);
}

function restroom() {
    clear();
    check_time();
    print("\nYou are in the restroom, you see a key on the floor you pick it up now you just have to go back the door to escape");
    nokey = false;
    havekey = true;
    print("\nWhere do you want to go next to escape? Say one of these choices:" + "\n\tsecondhallway" + "\n\ttheend");
    function processInput(input){
        if (input.toLowerCase() === "secondhallway") {
            secondhallway();
        } else if (input.toLowerCase() === "theend") {
            theend();
        } else {
            stayHere();
            waitThenCall(restroom);
        }
    }
    waitForInput(processInput);
}
function theend() {
    clear();
    check_time();
    print("you walked into the room and you see a black monster the monster eats you and you died, you should have went back to the door and escape. To restart the game refresh the page.");
    gameActive = false;
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            bedroom();
    }
    waitForInput(processInput);
}