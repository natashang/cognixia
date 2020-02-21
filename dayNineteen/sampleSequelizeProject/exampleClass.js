// to make into a module for future use,
//  const userClass = class User {
//      ...
//  }
//  module.exports = userClass OR new userClass()

// classes are like closures
// prototype --> ES5
class User{

    constructor(name, age) {
        this._name = name
        this._age = age
    }

    method1() {
        
    }

    isWalking() {
        console.log(this._name + " is walking")
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}

const userA = new User("Abe", 14)
console.log(userA._name + ", " +  userA._age)
userA.isWalking()

const oldName = userA._name
userA._name = "Ace"
console.log(`${oldName} changed their name to ${userA._name}`)

// ------------------------------------------------------

class AdminUser extends User {
    constructor(name, age) {
        super(name, age)
        this._admin = true
    }

    get admin(){
        return this._admin
    }
}

const nameB = "Sally Smith"
const ageB = 31
const userB = new AdminUser(nameB, ageB)

console.log(userB._name + ", " + userB._age + ", " + userB._admin)
userB.isWalking();
console.log(`${userB._name} is an admin: ${userB._admin}`)
