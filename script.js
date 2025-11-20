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
        showComment("Wow! My FIRST treat ever!");
    });

});
  
// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Buddy", weight: 10, happiness: 10, energy: 10 };

function clickedTreatButton() {
    // Increase pet happiness
    pet_info.happiness += 2;
    // Increase pet weight
    pet_info.weight += 1;
    showComment("Yum! That treat was delicious!");  // uses fadeToggle
    checkAndUpdatePetInfoInHtml();
    maybeClonePet();
}
    
function clickedPlayButton() {
    // Increase pet happiness
    pet_info.happiness += 2;
    // Decrease pet weight
    pet_info.weight -= 1;
    showComment("That was fun! Let's play again!");
    checkAndUpdatePetInfoInHtml();
    maybeClonePet();
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
    maybeClonePet();
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
    // fadeToggle is used here to quickly fade the comment in and out after each action
    // .stop(true, true) cancels any ongoing animation so it doesn't queue up
    $('#pet-comment')
        .stop(true, true)
        .text(message)
        .fadeToggle(1000)  // fade in if hidden, fade out if visible
        .fadeToggle(900);  // toggle again for a quick attention-grab

    /*
      EXPLANATION (for your comment in code):
      - .text(message) sets the comment text.
      - .fadeToggle() smoothly shows/hides the comment instead of a sudden change.
      - Calling it twice creates a quick blink/flash to draw the user's eye.
    */
}

function maybeClonePet() {
    if (pet_info.happiness >= 15) {
        // Clone the image of the pet
        var newPet = $('#pet-img').clone();

        // Optionally, make cloned pets a bit transparent or smaller
        newPet.css('opacity', 0.7);

        // Append the cloned pet next to the original
        $('.pet-image-container').append(newPet);

        /*
          EXPLANATION (for your comments):
          - .clone() creates a copy of the existing pet image element.
          - We then append that copy into the same container so it shows
            up on screen as a "friend" when the pet is very happy.
          - This demonstrates how .clone() can duplicate DOM elements dynamically.
        */
    }
}
