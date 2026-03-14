let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let nokey = true;
let havekey = false;
let minutes = 0;

function check_time() {
    clear();
    minutes++;
    if (minutes >= 15) {
        clear();
        print("Time is up! you died not knowing the truth!");
        gameActive = false;
    }
}
//If you need, add any "helper" functions here

//Make one function for each location
function bedroom() {
    clear();
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