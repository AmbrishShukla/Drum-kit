// using loop to do this for all the buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".set .drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
     });
}

// function for keyboard sound 
document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
       
});

// making a make sound function so that we can use it for both keyboard and click sound
function makeSound(key) {

    switch (key) {

        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

// creatin an animation for the time when the button is presed of clicked 
function buttonAnimation(animationKey) {
    
    var currentKey = document.querySelector("." + animationKey);

    currentKey.classList.add("pressed");

    setTimeout(function () {
        currentKey.classList.remove("pressed");
    }, 100);
}

