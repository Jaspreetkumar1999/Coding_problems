const reverseString = (str) => {
    // With built in methods
    str = str.split('')
    str = str.reverse();
    return str.join("")
}

const reverseStringWithLoop = (str) => {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString
}

// console.log(reverseStringWithLoop("12345"))
const reverseStringWithRecursion = (str) => {
    if (str.length) {
        return reverseStringWithRecursion(str.substr(1)) + str.charAt(0)
    }
    else {
        return ""
    }
}

console.log(reverseStringWithRecursion("12345"))

