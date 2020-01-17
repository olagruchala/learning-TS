var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return this.name + " from " + this.year + " is broken? " + this.broken + ".";
    }
};
var drink = {
    color: 'brown',
    decarbonated: true,
    sugar: 40,
    summary: function () {
        return this.color + " and " + this.decarbonated + " and " + this.sugar + " grams.";
    }
};
var printReport = function (item) {
    console.log(item.summary());
};
printReport(oldCivic);
printReport(drink);
