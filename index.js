#! usr/bin/env node
// import inquirer from 'inquirer';
// let Ans=["1947","JavaScript"]
// let corrected=0
// let incorrected=0
// const Question1 = await inquirer.prompt({
//     name: "question1",
//     type: "list", 
//     message: "When did Pakistan come into being?",
//     choices: ["1947", "1965", "1782", "2004"],
// });
// if(Question1.question1===Ans[0]){
//     corrected++;
// }
//     else{
//        incorrected++
//     }
//   //QUESTION : 2
//     let Question2=await inquirer.prompt({
//         name: "question2",
//         type: "list", 
//         message: "Which language TypeScript is Compile?",
//         choices: ["C#", "ReActjs", "JavaScript", "HTML"],
//     })
//     if (Question2.question2 === Ans[1]) {
//         corrected++;
//     }
//     else{
//         incorrected++
//     }  
//     console.log(`Correct Answers: ${corrected}`);
//     console.log(`Incorrect Answers: ${incorrected}`);
// DYNAMIC
import inquirer from 'inquirer';
import chalk from 'chalk';
let correctCount = 0;
let incorrectCount = 0;
// Array of questions
const questions = [
    {
        message: "When did Pakistan come into being?",
        choices: ["1947", "1965", "1782", "2004"],
        correctAnswer: "1947"
    },
    {
        message: "Which language is TypeScript compiled to?",
        choices: ["C#", "React.js", "JavaScript", "HTML"],
        correctAnswer: "JavaScript"
    },
    {
        message: "Which language is used to styling?",
        choices: ["C#", "CSS", "JavaScript", "HTML"],
        correctAnswer: "CSS"
    },
    {
        message: "Hyper Text Markup Language?",
        choices: ["C#", "CSS", "JavaScript", "HTML"],
        correctAnswer: "HTML"
    },
    {
        message: "node modules files commmand is ?",
        choices: ["tsc", "npm i ", "init -y", "npm init"],
        correctAnswer: "npm i"
    },
];
// Loop through each question
for (const question of questions) {
    const userAnswer = await inquirer.prompt({
        name: `question`, // Dynamically generate name for each question
        type: "list",
        message: question.message,
        choices: question.choices
    });
    // Check if user's answer is correct
    if (userAnswer[`question`] === question.correctAnswer) {
        console.log(chalk.green(`Correct`));
        correctCount++;
    }
    else {
        console.log(chalk.red(`Incorrect`));
        incorrectCount++;
    }
}
console.log(chalk.green(`Your Correct Answers: ${correctCount}`));
console.log(chalk.red(` Your Incorrect Answers: ${incorrectCount}`));
if (incorrectCount < correctCount) {
    console.log(chalk.bold.blue("congratulation .. you pass the quiz"));
}
else {
    console.log(chalk.red("Oppss..you don't qualified quiz"));
}
