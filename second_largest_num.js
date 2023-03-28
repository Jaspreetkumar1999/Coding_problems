const secondLargestNumber = (array) => {
    let largest = -2454635434;
    let secondLargest = -2454635434;
    arrayObject = {}
    for (let item of array) {
        arrayObject[item] = item
    }
    // Find largest
    // console.log("==SSS+++", arrayObject)
    for (let item in arrayObject) {
        console.log("item ", item, largest)
        if (item > largest) {
            largest = item
        }
    }
    console.log("s==>", largest)
    // Find Second Largest
    for (let item in arrayObject) {
        if (item < largest && item > secondLargest) {
            secondLargest = item;
        }
    }
    return secondLargest

}

console.log(secondLargestNumber([1, 2, 3, 4, 5, 6, 7, 8])) 