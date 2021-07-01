// USING STRINGS
let pyramidString = ""
const myHeight = 8

function buildPyramidString(height){
    for(let i=0; i<(height); i++){
        pyramidString = pyramidString+"# "
        console.log(pyramidString)
    }
}

buildPyramidString(myHeight)

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