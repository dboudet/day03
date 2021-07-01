const stopLimit = 100

function fizzBuzzToArray(whenToStop){
    fizzBuzzArray = []
    for( let i=1; i<=whenToStop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push("Fizz Buzz")
        } if (i % 3 === 0 && i % 5 !== 0) {
            fizzBuzzArray.push("Fizz")
        } if (i % 5 === 0 && i % 3 !== 0) {
            fizzBuzzArray.push("Buzz")
        } if (i % 5 !== 0 && i %3 !== 0) { // using else overlapped with 3s?
            fizzBuzzArray.push(i)
        }
    }
    console.log(fizzBuzzArray)
}

fizzBuzzToArray(stopLimit)