const finMissingNumber = (array) => {
    const object = {

    }
    for (let i = 1; i <= array.length; i++) {
        object[i] = false
    }
    // console.log("++", object)
    for (let item of array) {
        object[item] = true;
    }
    for (let item in object) {
        if (object[item] === false) {
            return item
        }
    }
    // console.log(object)
}

console.log(finMissingNumber([1, 3, 7, 5, 6, 2])) 