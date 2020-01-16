const carMakers = ['ford', 'touota', 'chevy'];
const dates = [new Date(), new Date()];

let carsByMake1: string[][];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// typowanie tablic
// pomaga w typowaniu kiedy wyciągamy z tablicy wartości
const car = carMakers[0];
const myCar = carMakers.pop();

// zapobiega wrzucaniu do tablicy niepasujących typów wartości
carMakers.push(100);
carMakers.push('BMW');

// pomaga w 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// rózne typy w jednej tablicy
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020.01.10');
