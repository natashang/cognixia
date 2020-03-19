
class Toy {
    
    // underscore has no special meaning, just the name
    /* constructor(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age; 
    } */

    get name() {
        return this._name;
    }

    set name(nm) {
        this._name = nm;
    }

} 

// empty constructor because not using a constructor with defined parameters
let t = new Toy();
t.name = 'Toy car'; // setter
console.log(t.name); // getter