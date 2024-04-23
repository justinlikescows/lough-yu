const numberContainer = document.getElementById('number-container');
const feedbackContainer = document.createElement('div'); // Create a container for feedback messages
document.body.appendChild(feedbackContainer); // Append it to the body

// List of names in the order they should be clicked
const names = ['Alan McGrath - Alpha', 'Long Nguyen - Beta', 'Vivian Huang - Zeta', 'Tony Chow - Theta', 'Richard Fan - Nu', 'Siddhartha Konda - Tau', 
'Richard Fan - Tau', 'Kelly Cheng - Alpha Epsilon', 'Grace Hsiang - Alpha Eta', 'Jenny Wu - Alpha Lambda', 'Allison Chu - Alpha Omicron'];

// Function to create and display buttons with names
function createButtons(names) {
    const buttons = names.map(name => {
        const button = document.createElement('button');
        button.textContent = name;
        button.classList.add('big-button'); // Add CSS class to the button
        button.addEventListener('click', function(event) {
            handleClick(name, event.target); // Pass the button element to the click handler
        });
        return button;
    });

    // Shuffle the buttons and append them to the container
    shuffleArray(buttons).forEach(button => numberContainer.appendChild(button));
}
    

let currentIndex = 0; // Track the current index in the names array

function handleClick(clickedName, button) {
  if (clickedName === names[currentIndex]) {
    currentIndex++; // Move to next name in sequence
    button.style.backgroundColor = 'green'; // Change button color to green
    feedbackContainer.textContent = 'Correct!'; // Display feedback message
  }
// } else {
//     button.style.backgroundColor = 'red'; // Change button color to red
//     feedbackContainer.textContent = 'Incorrect! Try again.'; // Display feedback message

//   }

  // Handle game end (win or lose)
  if (currentIndex === names.length) { // Win condition (all names clicked correctly)
    console.log("You win!");
  }
}

// Function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

createButtons(names);