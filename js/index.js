//Objects
const person = {
   firstName: "Ankur",
   lastName: "Patel",
   age: 20,
   info: function() {
       return this.firstName + " " + this.lastName + " is " + this.age + " year old."
   }
};
document.getElementById("demo").innerHTML = person.info();

const favCars = {
   first: {
       car1: "MUSTANG",
       car2: "MUSTANG GT",
       car3: "MUSTANG MACH 1"
   },
   second: "Nissan",
   third: "Porsche"
};
document.getElementById("demo1").innerHTML = favCars.first.car1 + "  2022 is expected to be launched in India in March 2022";

//Events
function clk() {
   document.getElementById("edemo").innerHTML = "You have Clicked.....";
}

function dclk() {
   document.getElementById("edemo1").innerHTML = "You have  Double clicked.....";
}

let x = 0;
let y = 0;
let z = 0;

function moveFunction() {
   document.getElementById("edemo2").innerHTML = x += 1;
}

function enterFunction() {
   document.getElementById("edemo3").innerHTML = y += 1;
}

function overFunction() {
   document.getElementById("edemo4").innerHTML = z += 1;
}

//String Methods
let str;
str = "This is a string";

document.getElementById("method").innerHTML = str.length;
document.getElementById("method1").innerHTML = str.toLowerCase();
document.getElementById("method2").innerHTML = str.toUpperCase();
document.getElementById("method3").innerHTML = str.indexOf("a");
document.getElementById("method4").innerHTML = str.charAt(3);
document.getElementById("method5").innerHTML = str.endsWith("ing");
document.getElementById("method6").innerHTML = str.includes("a");
document.getElementById("method7").innerHTML = str.slice(0, 4);
document.getElementById("method8").innerHTML = str.split(" ");
document.getElementById("method9").innerHTML = str.replace("string", "NEW STRING");

//Array Methods
let marks = [20, 30, 40, 50, 60];

let value = marks.indexOf(40);
console.log(value);

marks.push(70);
marks.unshift(10);

marks.pop();
marks.shift();

marks.splice(1, 3);

marks.reverse();

let marks1 = [80, 90];
marks = marks.concat(marks1);

console.log(marks);

//Array Iterations
const arr = ["Apples", "Grapes", "Oranges"];
console.log("My array is ", arr);

function fruitsIterator(values) {
   let nextIndex = 0;
   return {
       next: function() {
           if (nextIndex < values.length) {
               return {
                   value: values[nextIndex++],
                   done: false
               }
           } else {
               return {
                   done: true
               }
           }
       }
   }
}

const fruits = fruitsIterator(arr);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)