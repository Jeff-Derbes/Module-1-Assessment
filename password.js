const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
_    _      _ _       _ 
| |  | |    | | |     | |
| |__| | ___| | | ___ | |
|  __  |/ _ \ | |/ _ \| |
| |  | |  __/ | | (_) |_|
|_|  |_|\___|_|_|\___/(_)
                         
`)

//This was the closest to working ASCII art I could get in my terminal :/


reader.question('Please enter a password ', function(input){
    if (input.length > 10 && input.indexOf(' ') === -1){
        console.log("Good password!")
    }else if (input.length > 10 && input.indexOf(' ') !== -1){
        console.log('Password cannot contain spaces')
    } else if(input.length < 10) {
        console.log('Sorry, your password needs to be longer than 10 characters')
    }

    reader.close()
});