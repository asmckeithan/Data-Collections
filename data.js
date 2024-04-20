console.log('Data Collection')

console.log(`Refactoring the Old Code`)
console.log(`Blue Print Code from Josh`)

let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
// let csvStr = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell = 1
// let row = 1

for (let i = 0; i < csvStr.length; i++) {

  if (csvStr[i] === ','){
    cell++
    continue
  }

  if (csvStr[i] === "\n") {
    cell = 1
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    continue
  }

  switch (cell) {
    case 1:
      cell1 += csvStr[i]
    break
    case 2:
      cell2 += csvStr[i]
    break
    case 3:
      cell3 += csvStr[i]
    break
    case 4:
      cell4 += csvStr[i]
    break
  }

  if (cell === 4 && csvStr[i +1 ] === '\n' || i + 1 === csvStr.length) {
    console.log(cell1, cell2, cell3, cell4);
  }

}


console.log(`My own Program for String `)

let string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
let array = string.split("\n") 
console.log(array)
array.forEach((row) => {
    console.log([row])
})
// Seperated the string by creating using the split method and appling the forEach() method

// Next step is to divide each array down into indvidual elements and create my columns and rows using a loop 

//Part 2
// create a math problem to count each element in a row to solve for column

// create a math problem to count the number of array(variable) to calculate the number of rows

// section 2 Part 2
// use the .flat method to simplify the from 3 dimensional to 2 dimensiona l

//Part 3 
//create an object where the key is the heading for that column
// create a loop to show the first element of the array (variable ) is the head of each column. This will require a for each involved in possible loop. 

//Part 4
//1. use a pop method to remove the last element at 
//2. unshift method to add at index one 
//3. push method to add the end of the global scope array



