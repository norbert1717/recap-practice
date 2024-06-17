/*let variable = "valami"; // felül tudjuk írni
const constantVariable = "konstans valami"; // nem tudjuk felül írni
console.log(variable, constantVariable);

variable = "új valami";
console.log(variable); */

// primitívek - számok, string, null, undifined, nan

/*let variable1 = 10;
let variable2 = "text";
let variable3 = true;
let variable4 = undefined;

//adatstruktúrák

let array = ["one", "two", "three"];
let obj = {
    key1: "value",
    key2: 10
};

// függvények

function myFunc(name) {
    if (name === "Lajos") {
        console.log("Szia Lajos!") // nem visszatérési érték
    } else {
    console.log(`Hello ${name}`);
    }
}

myFunc("Lajos"); // itt fog lefutni a kód
myFunc("Norbert");

function betterGreetings(name) {
    if (name === "Lajos") {
        console.log("Szia Lajos!") 
        return "Szia Lajos!"
    } else {
        console.log(`Hello ${name}`);
        return `Hello ${name}`
    }
}
myFunc("Norbert");
myFunc("Lajos"); // itt fog lefutni a kód
const result = betterGreetings("Lajos");
console.log("result:", result); 

function myFunc() {}

const arrowFunc = (name) => {
    console.log(`hello ${name}, i am an arrow function`); // nem visszatérési érték
    return "return value"; // visszatérési érték
} 
console.log(arrowFunc("norbi")); */

const array = ["two", 13, false, null, NaN, ["element1", "element2"], {key: "value"}];
//console.log(array[array.length - 1]);


const obj = {
    key: "value",
    key2: 10,
    key3: true,
    key4: ["elem1", "elem2", "elem3"],
    key5: { nestedKey: "valami" },
    "key-6": "kismacska"
}
/*console.log(obj.key); // bizonyos karaktereket nem tud elérni(pl. kötőjel)
console.log(obj["key"]);

console.log(obj.key-6);
console.log(obj["key-6"]);
console.log(obj.key4[1]); */

const testArr = ["elem1", "elem2"]
console.log(typeof String(["one", "two"]));