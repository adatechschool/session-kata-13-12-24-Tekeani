let colorToGuess = ["blue", "red"];
const validColors = ["blue", "pink", "red", "purple"];

function isValidGuess(reponse) {
    let guess = reponse.split(",")
    return guess.every(color => validColors.includes(color)) && guess.length === 2;
}

function playGame() {
    let reponse = prompt("Choisissez 2 couleurs parmi ces choix valides : blue, pink, red, purple");
    if (!isValidGuess(reponse)) {
        console.log("Proposition invalide. Veuillez entrer exactement 2 couleurs valides séparées par une virgule.");
        return;
    }
    console.log("Votre proposition :", reponse.split(",").map(color => color.trim()));
}

playGame();