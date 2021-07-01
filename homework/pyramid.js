// USING STRINGS
let pyramidString = ""
const myHeight = 8

function buildPyramidString(height){
    for(let i=0; i<(height); i++){
//      pyramidString = pyramidString+"# "
        pyramidString += "# "
        console.log(pyramidString)
    }
}

buildPyramidString(myHeight)

// ARRAYS USING JOIN (Todd example)
/* 
let pyramidString = []
const myHeight = 8

function buildPyramidString(height){
    for(let i=0; i<(height); i++){
        pyramidString.push('#')
        console.log(pyramidString.join(' '))
    }
}

buildPyramidString(myHeight)
 */

// USING ARRAYS
/* 
let pyramidArray = []
const myHeight2 = 4

function buildPyramidArray(height){
    for(let i=0; i<height; i++) {
        pyramidArray.push('#')
        console.log(pyramidArray)
    }
}

buildPyramidArray(myHeight2)
 */