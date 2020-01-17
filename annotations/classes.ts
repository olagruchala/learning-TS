class Vehicle {
    constructor(public color: string) { }

    drive(): void {
        console.log(`brummmm`);
    }
    protected honk(): void {
        console.log(`biiiip`);
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    drive(): void {
        console.log(`vrooom`);
    }

    startDriving() {
        this.honk();
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'red');
console.log(car.color)

//   vehicle.drive();
//   vehicle.honk();
//   car.drive();
//   car.startDriving();