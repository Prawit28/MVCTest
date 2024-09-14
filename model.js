class Cow {
    constructor(cowId, color, ageYear, ageMonth) {
        this.cowId = cowId;
        this.color = color;
        this.ageYear = ageYear;
        this.ageMonth = ageMonth;
    }

    calMilk() { // calculator liter of milk products
        const totalMonths = this.ageYear * 12 + this.ageMonth;
        switch (this.color) {
            case "White": return 120 - totalMonths;
            case "Brown": return  40 - this.ageYear;
            case "Pink": return 30 - this.ageMonth;
            default : return 0;
        }
    }

    checkcolor() { // check type of milk Products
        switch (this.color) {
            case "White": return "Fresh Milk"
            case "Brown": return  "Chocolate Milk"
            case "Pink": return "Strawberry Milk"
            default : return 0;
        }
    }
}

const cowData = [
    new Cow("12345678", "White", 2, 3),
    new Cow("98822724", "White", 4, 2),
    new Cow("33083201", "White", 5, 3),
    new Cow("22269799", "White", 5, 5),
    new Cow("21056223", "White", 6, 2),
    new Cow("71097714", "White", 6, 9),
    new Cow("93676417", "White", 3, 9),
    new Cow("23456789", "Brown", 0, 5),
    new Cow("23456789", "Brown", 0, 7),
    new Cow("23456789", "Brown", 3, 8),
    new Cow("23456789", "Brown", 8, 7),
    new Cow("23456789", "Brown", 7, 7),
    new Cow("34567890", "Pink", 1, 0),
    new Cow("33370748", "Pink", 6, 1),
    new Cow("44733101", "Pink", 2, 8),
    new Cow("86899779", "Pink", 3, 3),
    new Cow("34622247", "Pink", 7, 9),
    new Cow("86431664", "Pink", 2, 6),
];

// Model: Function to get cow by ID
function getCowById(cowId) {
    return cowData.find(cow => cow.cowId === cowId);
}

