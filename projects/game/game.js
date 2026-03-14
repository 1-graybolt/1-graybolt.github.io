let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let nokey = false;
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
function Bedroom() {
    clear();
    print("\nYou wake up in your bedroom");
    print("\nthis wasn't how you remember going to sleep...");
    print("\nBang!");
    print("\nevery alarm goes off, you only have 15 minutes to evacuate hurry.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tHallway");
    
    function processInput(input){
        if (input.toLowerCase() === "Hallway") {
            Hallway();
            print("\nEverything is super dark you turn on the lights and realized there is 4 ways to go.")
            print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tbedroom" + "\n\tkitchen" + "\n\tlivingroom" + "\n\trestroom" )
        } else {
            stayHere();
            waitThenCall(Bedroom);
        }
    }
    waitForInput(processInput);
}

function Hallway() {
    clear();
    print("\nYou are in the hallway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tbedroom");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            bedroom();
        } else {
            stayHere();
            waitThenCall(locationB);
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
            Bedroom();
    }
    waitForInput(processInput);
}