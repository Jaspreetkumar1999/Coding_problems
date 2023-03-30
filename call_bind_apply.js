let name = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function (param = "") {
        return `My Name  ${this.firstName} ${this.lastName} and ${param}`
    }
}

const getFirstName = function (town) {
    return `My First Name  ${this.firstName} and I'm from ${town}`
}

let secondName = {
    firstName: "Hi",
    lastName: "hello"
}
console.log(name.getFullName.call(secondName))
console.log(name.getFullName.apply(secondName, ["ss"]))

console.log(getFirstName.bind(secondName)("PGW"))
