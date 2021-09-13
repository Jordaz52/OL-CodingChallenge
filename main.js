/*Main js which handles the user's input and starts the process
  It basically imports the readline-sync to be able to read the user's operation input using the readline.question
*/
try{
let readline = require('readline-sync');
const flow = require('./process.js');

let operation = readline.question("? ");

//Starts the operation calculation process calling the process.js process module.
flow.process(operation);


}
//catch errors
catch(err) {
  console.log("Unable to do the operation given. Please verify.");
}

