interface Report {
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `${this.name} from ${this.year} is broken? ${this.broken}.`
    }
}

const drink = {
    color: 'brown',
    decarbonated: true,
    sugar: 40,
    summary(): string {
        return `${this.color} and ${this.decarbonated} and ${this.sugar} grams.`
    }
}

const printReport = (item: Report): void => {
    console.log(item.summary())
};

printReport(oldCivic);
printReport(drink);

