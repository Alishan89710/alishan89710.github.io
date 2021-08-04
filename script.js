//Q no 1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "10", quantity: "2", }
];
console.log(itemsArray[0].price*itemsArray[0].quantity)
console.log(itemsArray[1].price * itemsArray[1].quantity)
console.log(itemsArray[2].price * itemsArray[2].quantity)
console.log(itemsArray[3].price * itemsArray[3].quantity)
//Q no 2
var item = {
    name : "Ali shan",
    email: "shan89710@gmail.com",
    pasword: "******",
    age: "21",
};
if ("name" in item === true) {
    console.log(" yes")
}
else{console.log("nothing")}
if ("email" in item === true) {console.log ("u are") }
else { console.log("u win ")}

//Q no 3
function Person() {
    this.name = 'John',
        this.age = 23
}


const person = new Person();
//Q no 4

function Person() {
    this.name = 'John',
        this.age = "23",
        this.gender ="male"

   
}

const person1 = new Person();
const person2 = new Person();
console.log(person1.name);  
console.log(person2.name);  

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("John Doe", 23);

console.log(person.name,person.age);
