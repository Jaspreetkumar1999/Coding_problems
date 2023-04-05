const input = ["test", "test", "answer", "answer", "answer"]

const parentObject = {};
for (let item of input) {
    parentObject[item] = parentObject[item] + 1 || 1
}
// console.log(parentObject)
const finalObject = {}
for (let key in parentObject) {
    finalObject[parentObject[key]] = repeatString(key, parentObject[key])
}
console.log(finalObject)

function repeatString(string, number) {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(string)
    }
    return array;
}