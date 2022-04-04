// ASSESSMENT 2: Coding Practical Questions with Jest






// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.


// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.





// a) Create a test with expect statements for each of the variables provided.
const num1 = 15
const num2 = 0
const num3 = -7


// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// ****OUTPUT-GOOD FAIL****
// ● divisibleByThree 
// › takes a number as an argument and decides if the number is evenly divisble by three or not
// ReferenceError: divisibleByThree is not defined


// b) Create the function that makes the test pass.


//****PSUEDOCODE****
// function name divisibleByThree
// input will be a value
// take that number and divide by 3
// if divisible by 3 then true
// if not then false
// will use the modulo operator to see if the number is divsible by 3
// output will confirm if it divisible or not

const divisibleByThree = (number) => {
    if(number % 3 === 0) {
        return `${number} is divisible by three`
    }   else { 
        return `${number} is not divisible by three` }   
}

console.log(divisibleByThree(num1))
console.log(divisibleByThree(num2))
console.log(divisibleByThree(num3))

//***OUTPUT-PASSED***
//divisibleByThree
// ✓takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.165 s




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("wordVomit", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(wordVomit(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordVomit(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

    })
})

//***OUTPUT-BAD FAIL***
// ✕ takes in an array of words and returns an array with all the words capitalized
// ● wordVomit › takes in an array of words and returns an array with all the words capitalized
//   ReferenceError: wordVomit is not defined

// // b) Create the function that makes the test pass.
// //wordVomit

// ****PSUEDOCODE****
// create the function that takes in an array
// create a variable that maps thru the array
// use a method to capitilize first letter in character
//

const wordVomit = (array) => {
  let words = array.map(value => 
    value[0].toUpperCase() + value.substring(1)
  )
  return words
}

console.log (wordVomit(randomNouns1))
console.log (wordVomit(randomNouns2))


//***OUTPUT-GOOD FAIL***/
// ✓ takes in an array of words and returns an array with all the words capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.151 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.83s.


// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
const vowelTester2 = "academy"
const vowelTester3 = "challenges"

// // Expected output: 1
// // Expected output: 0
// // Expected output: 2

describe("vowelStart", () => {
    it("takes in a string and logs the index of the first vowel", () => {
       expect(vowelStart(vowelTester1)).toEqual(1)
       expect(vowelStart(vowelTester2)).toEqual(0)
       expect(vowelStart(vowelTester3)).toEqual(2)
    })
})
//****OUTPUT-GOOD FAIL****

// vowelStart
// ✕ takes in a string and logs the index of the first vowel (1 ms)

// ● vowelStart › takes in a string and logs the index of the first vowel

//   ReferenceError: vowelStart is not defined



// // b) Create the function that makes the test pass.

//****PSUEDOCODE****
// make a function that takes in a string
// access each item in the string 
// takes each string and give index of first vowel
// rinse and repeat for each string aka iterate


const vowelStart = (string) => { 
    const letters = "aeiou"
    for(let i = 0; i < string.length; i++) {
        if (letters.includes(string[i])) {
       return i
    }
} 
}


  console.log (vowelStart(vowelTester1))
  console.log (vowelStart(vowelTester2))
  console.log (vowelStart(vowelTester3))

//****OUTPUT/PASS****
// vowelStart
// ✓ takes in a string and logs the index of the first vowel (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
