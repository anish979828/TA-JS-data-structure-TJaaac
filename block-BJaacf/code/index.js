// 1. Create an array named numbers and store 5 number values in it
let array = [1, 2, 3, 4, 5]

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0
for (let i = 0; i < array.length; i++){
    sum += array[i];
}

// 3. Calculate the average of array items and print it to the console using console.log()
let average = (sum/array.length)
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()
var arr  = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= -Infinity;

for (i=0; i<arr.length; i++){
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

// 5. Find the lowest number in the array and print it to the console using console.log()
var lowest= Infinity;

for (i=0; i < arr.length; i++){
    if (arr[i] < lowest) {
        lowest = arr[i]
    }
}
console.log(lowest);

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = ""
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        even += arr[i] + ", " 
    }
}
console.log(even)

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = ""
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
        odd += arr[i] + ", " 
    }
}
console.log(odd)

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let multipleOfFive = ""
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 5 == 0){
        multipleOfFive += arr[i] + ", " 
    }
}
console.log(multipleOfFive)

// 9. Log all the element of the array one by one
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// 10. Find all the number in the array that is divisible by 3
let multipleOfThree = ""
for(let i = 0; i < arr.length; i++){
    if (arr[i] % 3 == 0){
        multipleOfThree += arr[i] + ", " 
    }
}
console.log(multipleOfThree)

