const stopLimit = 100

function fizzBuzz(whenToStop){
    for( let i=1; i<=whenToStop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        } if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz")
        } if (i % 5 !== 0 && i %3 !== 0) { // using else overlapped with 3s?
            console.log(i)            
        }
    }
}

fizzBuzz(stopLimit)