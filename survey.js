
////wrote out the longer version before, then shortened so code was not repeating

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Array of questions to ask the user
const questions = [
  "What's your name/nickname? ",
  "What's an activity you like doing? (e.g., playing soccer) ",
  "What do you listen to while doing your activity? ",
  "What meal is your favorite? ",
  "What do you like to eat in a meal? ",
  "What sport is your favorite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

let answers = []; ///hold answers 

// Function to ask questions in order
const askQuestion = (index) => {
  if (index === questions.length) {
     rl.close();
    return;

    };
   
  }
  
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    console.log("thank you for your answer! :)")
    askQuestion(index + 1); // Ask the next question
  });
;

// Start asking questions
askQuestion(0);