const myArray = [1,2,3,4,5,6,"soumya",8.00,false]
const myArray1 = new Array(1,2,3,4)
/*  console.log(myArray[3])
console.log(myArray.length)
console.log(myArray1)
*/
myArray.push("add")   //ADD data at the last
// console.log(myArray)  
myArray.pop()         //delete data at last
// console.log(myArray) 
myArray.unshift("shift")  //add 'shift' at first position and shift all other value to the right
// console.log(myArray)
myArray.shift("shift")  //add 'shift' at first position and shift all to the right
 console.log(myArray)
console.log(myArray.includes(3))
console.log(myArray.indexOf(5))


const newarr = myArray.join()
/*  console.log(newarr)
console.log(myArray.slice(1,5))  //In slice it take only value between that 
console.log("A",myArray)
console.log(myArray.splice(1,5))  //In splice it cut the the value between that
console.log("B",myArray)
console.log(myArray.toReversed())  //Return in reverse order
console.log(myArray.toString())    //return as a string
console.log(myArray.toLocaleString()) //RETURN STRING in local format
*/


const carsNameValue = ["tata","hundai","mahindra"]
const bikeName = ["hero","bajaj","bmw"]
/*   carsNameValue.push(bikeName)
console.log(carsNameValue)
console.log(carsNameValue[3][2])
*/
/*
const concatValue = carsNameValue.concat(bikeName)  //concate two arraty but we can only 'concat()' two array
console.log(concatValue)
const spreadVal = [...carsNameValue,...bikeName]    //spread all value of array && recommanded to use this.....
console.log(spreadVal)                              //because we can spread() || add more than two array
const anotherArray = [1,2,3,[4,4,6],[4,5,[7,8]]]
const anoterSubArray = anotherArray.flat(Infinity)   //convert the multiple arrays into single array
console.log(anoterSubArray)
console.log(Array.isArray("soumya"))    //return true or  false 
console.log(Array.from("soumya"))     //convert string to array type
*/

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3))  //create an array


// console.log(parseInt('123') === 123)
