let gameActive = true;
let havekey = false;
let minutes = 0;

function check_time() {
    minutes++;
    if (minutes >= 15) {
        clear();
        print("Time is up! You died not knowing the truth!");
        gameActive = false;
    }
}

function start() {
    clear();
    print("Welcome to my game!");
    print("Type 'start' and press Enter to begin.");

    function processInput(input) {
        if (input.toLowerCase() === "start") {
            bedroom();
        } else {
            start();
        }
    }
    waitForInput(processInput);
}

function bedroom() {
    clear();
    print("\nYou wake up in your bedroom.");
    print("Bang! The alarm goes off. You have 15 minutes to escape!");
    print("\nWhere do you want to go? Type 'hallway'");
    
    function processInput(input) {
        if (input.toLowerCase() === "hallway") {
            hallway();
        } else {
            print("Invalid command! Try again.");
            waitThenCall(bedroom, 1000);
        }
    }
    waitForInput(processInput);
}