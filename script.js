$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);

// .one() runs this handler only the first time the Treat button is clicked
$('.treat-button').one('click', function() {
    // Give a small one-time bonus on the very first treat
    pet_info.happiness += 3;
    checkAndUpdatePetInfoInHtml();
});

});
  
// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Buddy", weight: 10, happiness: 10, energy: 10 };

function clickedTreatButton() {
    // Increase pet happiness
    pet_info.happiness += 2;
    // Increase pet weight
    pet_info.weight += 1;
    showComment("Yum! That treat was delicious!");  // uses slideToggle
    checkAndUpdatePetInfoInHtml();
}
    
function clickedPlayButton() {
    // Increase pet happiness
    pet_info.happiness += 2;
    // Decrease pet weight
    pet_info.weight -= 1;
    showComment("That was fun! Let's play again!");
    checkAndUpdatePetInfoInHtml();
}
    
function clickedExerciseButton() {
    // Decrease pet happiness
    pet_info.happiness -= 1;
    // Decrease pet weight
    pet_info.weight -= 2;
    showComment("That workout was tough, but I'm healthier!");
    checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
    pet_info.energy += 3;
    pet_info.happiness += 1;
    showComment("Zzz... I feel so rested!");
    checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
}
    
function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero.
    if (pet_info.weight < 0) {
        pet_info.weight = 0;
    }
    if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
    }
}
    
// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
    $('.energy').text(pet_info['energy']);
}
  
// Shows a visual message from the pet after each action
function showComment(message) {
    // slideToggle is used here to slide the comment in and out after each action
    // .stop(true, true) cancels any ongoing animation so it doesn't stack up
    $('#pet-comment')
        .stop(true, true)
        .text(message)
        .slideToggle(300)   // slide open
        .delay(800)         // keep it visible briefly
        .slideToggle(300);  // slide closed

    /*
      EXPLANATION (for your comment in code):
      - .text(message) sets the comment text.
      - .slideToggle() smoothly shows/hides the comment area.
      - .delay() keeps the message visible before sliding back up.
    */
}
