/*
Problem: Find the two numbers that add up to a given sum in an array of integers.
*/

const input1 = [5, 2, 3, 4, 1];
const input2 = 3

// with Naive approach
const numEqSum = (input1, input2) => {
    for (let i = 0; i < input1.length; i++) {
        for (let j = i + 1; j < input1.length; j++) {
            // console.log()
            if ((input1[i] + input1[j]) === input2) {
                console.log("Found", input1[i], input1[j])
            }
        }
    }
}
// numEqSum(input1, input2)

// Optimus approach 

const findPairEqSum = (input, sum) => {
    input = input.sort((a, b) => a - b)
    let left = 0;
    let right = input.length
    // console.log(input)
    while (left < right) {
        if (input[left] + input[right] === sum) {

            return [input[left], input[right]]
        }
        if (input[left] + input[right] < sum) {
            left = left + 1
        }
        else {
            right = right - 1
        }
    }
    return 0
}
console.log(findPairEqSum(input1, 3))
