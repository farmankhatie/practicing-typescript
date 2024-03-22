#!/usr/bin/env Node
import  inquirer from 'inquirer';
import  chalk from 'chalk';

// Function to calculate BMI
function calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
}

// Function to interpret BMI value
function interpretBMI(bmi: number): string {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Main function to run the program
async function runBMIProgram() {
    const questions = [
        {
            type: 'number',
            name: 'weight',
            message: 'Enter your weight in kilograms:'
        },
        {
            type: 'number',
            name: 'height',
            message: 'Enter your height in meters:'
        }
    ];

    // Ask user for weight and height
    const { weight, height } = await inquirer.prompt(questions);

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Interpret BMI
    const interpretation = interpretBMI(bmi);

    // Output result
    console.log(chalk.blue(`Your BMI: ${bmi.toFixed(2)}`));
    console.log(chalk.green(`Interpretation: ${interpretation}`));
}

// Run the program
runBMIProgram();
