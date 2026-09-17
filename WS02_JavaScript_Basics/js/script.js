// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Xenia";
const favoriteAnimal = "Panda";


// Print the variables to the console
console.log("Mun nimi on " + userName);
console.log("Mun lempieläin on " + favoriteAnimal);
// STEP 3: User interaction
// Display a pop-up message
alert("Hellou! Tervetuloa mun sivulle ;)");

// Ask the user for their name

const visitorName = prompt("Kerro, mikä on nimesi?");

// Print the user's answer
console.log(visitorName);

console.log("Moikka " + visitorName + "! Tervetuloa mun javasciptin kokeilusivulle");
// Ask the user for their favorite animal

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

// Create a sentence using both answers

console.log( visitorName + ", sun lempieläimesi on " + visitorFavoriteAnimal + ".");

if (visitorFavoriteAnimal === "Panda"|| visitorFavoriteAnimal === "panda") {
    console.log("Great choice! Se on myös minun lempieläin :) ");
} else {
    console.log("Nice! Sun lempieläin on " + visitorFavoriteAnimal + ".");
};
