const reverseString = (str) => {
    // With built in methods
    str = str.split('')
    str = str.reverse();
    return str.join("")
}

const findSubstrings = (str) => {
    const subStringArray = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            subStringArray.push(str.slice(i, j))
        }
    }
    return subStringArray
}

// console.log(findSubstrings('abracadabra'))

const largestPalindromStr = (str) => {
    const stringTrack = {
        count: 0,
        string: ""
    };
    const subStrArray = findSubstrings(str)
    for (const substr of subStrArray) {
        const reversedString = reverseString(substr);
        if (reversedString === substr) {
            if (stringTrack.count < reversedString.length) {
                stringTrack.count = reversedString.length;
                stringTrack.string = substr
            }
        }
    }
    return stringTrack;
}

console.log(largestPalindromStr("abracadabra"))