import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Hey, Dear how are you? write (y) to continue",
        type: "string",
        name: "Weather",
    },
    {
        message: "Dear, select one of them",
        type: "list",
        name: "Weather1",
        choices: [
            "Rainy",
            "Sunny",
            "Snowy",
        ],
    },
]);
// switch case
switch (answer.Weather1) {
    case "Sunny":
        console.log("Wear light cloths and sunglasses, drink more water also cover you head.");
        break;
    case "Rainy":
        console.log("Take an Umbrella, don't touch the any thing which related with electricity without slippers");
        break;
    case "Snowy":
        console.log("Wear warm cloths and more eat dry fruits");
        break;
    default:
        console.log("For further, Check the weather forcaast");
        break;
}
