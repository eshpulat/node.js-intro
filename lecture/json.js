// When building modern web applications, one of the most important tasks is transmitting data between the client (browser) and the server. Think of a typical user scenario where a user enters their details into a form on a website. This data is collected in JavaScript objects, such as:

const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "securepassword",
    passwordConfirmation: "securepassword"
};

const hobbies = ["Reading", "Swimming", "Coding"];

// Serialization: Converting Data to a String

const userJSON = JSON.stringify(user);
const hobbiesJSON = JSON.stringify(hobbies);

console.log(userJSON);
// Outputs: {"username":"JohnDoe","email":"johndoe@example.com","password":"securepassword","passwordConfirmation":"securepassword"}

console.log(hobbiesJSON);
// Outputs: ["Reading","Swimming","Coding"]

// Deserialization: Reversing the Process

const receivedUser = JSON.parse(userJSON);
const receivedHobbies = JSON.parse(hobbiesJSON);

console.log(receivedUser.username); // Outputs: "JohnDoe"
console.log(receivedHobbies[0]); // Outputs: "Reading"

// Summary: Why Do We Need JSON?

// // Original data
// const user = {
//     username: "JohnDoe",
//     email: "johndoe@example.com",
//     password: "securepassword",
//     passwordConfirmation: "securepassword"
// };

// const hobbies = ["Reading", "Swimming", "Coding"];

// // Serialization (Client Side)
// const userJSON = JSON.stringify(user);
// const hobbiesJSON = JSON.stringify(hobbies);

// // Send userJSON and hobbiesJSON to the server...

// // Deserialization (Server Side)
// const receivedUser = JSON.parse(userJSON);
// const receivedHobbies = JSON.parse(hobbiesJSON);

// // Access the structured data
// console.log(receivedUser.username); // Outputs: "JohnDoe"
// console.log(receivedHobbies[0]); // Outputs: "Reading"
