let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let nokey = false;
let havekey = false;
let minutes = 0;

function check_time() {
    clear();
    minutes++;
}
//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou wake up in your bedroom");
    print("this wasn't how you remember going to sleep...");
    print("Bang!")
    print("every alarm goes off, you only have 15 minutes to evacuate hurry.");
    print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tHallway");
    
    function processInput(input){
        if (input.toLowerCase() === "Hallway") {
            Hallway();
            print("Everything is super dark you turn on the lights and realized there is 4 ways to go.")
            print("\nWhere do you want to go next to escape? Say one of these choices:" +
        "\n\tbedroom" + "\n\tkitchen" + "\n\tlivingroom" + "\n\trestroom" )
        } else {
            stayHere();
            waitThenCall(bedroom);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
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
            bedroom();
    }
    waitForInput(processInput);
}