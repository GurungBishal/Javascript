// class Person {

//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     greeting() {
//         return `Hello there ${this.firstName}  ${this.lastName}`;
//     }
//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }
//     static addNumbers(x, y) {
//         return x + y;
//     }
// }

// const itachi = new Person('Itachi', 'Gurung', '11-13-1980');

// itachi.getsMarried('Lama');
// console.log(itachi);
// console.log(Person.addNumbers(1, 2));

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there !!! ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}
const itachi = new Customer('Itachii', 'Gurung', '9817317111', 'Standard');

console.log(itachi.greeting());
console.log(Customer.getMembershipCost());