
// else-if

const stopLimit = 100

function fizzBuzz(whenToStop){
    for( let i=1; i<=whenToStop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz")
        } else {
            console.log(i)            
        }
    }
}

fizzBuzz(stopLimit)
 

// ifs
/* 
const stopLimit = 100

function fizzBuzz(whenToStop){
    for( let i=1; i<=whenToStop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        } if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz")
        } if (i % 3 !== 0 && i % 5 !== 0) { 
            console.log(i)            
        }
    }
}

fizzBuzz(stopLimit)
 */

// you can use ternary parts of it - the simpler ifs
// console.log((i%5===0) ? 'Buzz' :i)