
class Car {
    constructor(id, name, fuel) {
        this.id = id;
        this.name = name;
        this.fuel = fuel;
    }

    drive() {
        console.log('driving')
    }
}

// inheritance 
// subclass can access methods of parent class
// this.power to refer to SportsCar, not Car
class SportsCar extends Car {
    constructor(id, name, fuel, power) {
        super(id, name, fuel);
        this.power = power;
    }

    show() {
        console.log(`${this.id}, ${this.name}, ${this.fuel}, ${this.power}`)
    }

    drive() {
        // this would access super class' drive(), AND sub drive()
        // super(); 
        console.log('driving... SportsCar')
    }
}

/*
let c = new Car(1, "Ferrari", "Petrol");
c.drive();
*/

let sc = new SportsCar(1, "Ferrari", "Petrol", "2.5");
sc.drive();
sc.show();
