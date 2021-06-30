
const fruits = ['banana','orange','apple']

fruits.push('lemon')
fruits.push( {newFruit:'emoji' } )
fruits.shift() // removes first item
fruits.unshift( { pet: 'fish'} )


// console.log("second fruit is:", fruits[1])
// console.log("the length of this array is:", fruits.length)
// console.log("these are my fruits:", fruits)

const shoppingList = ['shampoo', 'milk', 'soap', 'bacon']
// console.log('this is shopping list ===========', shoppingList)

const newShoppingList = shoppingList.concat(fruits)
// console.log("this is my new shopping list:", newShoppingList.sort())


/* console.log("original shopping list with", newShoppingList.length, "items:", newShoppingList)
let removedFruit = newShoppingList.pop()
console.log("fruit removed:", removedFruit)
console.log("new shopping list with", newShoppingList.length, "items:", newShoppingList)
 */

console.log(Math.max(42,78,64,31))