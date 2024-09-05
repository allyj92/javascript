// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!!!!!") {
  console.log(`${msg}, ${person}${punc}`);
}

greet("Joaquin", "Hiiiii");

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caniae" };

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

