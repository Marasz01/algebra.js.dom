//1. Postavite "use strict" direktivu na početak programa u script.js .Ispravite sve greške koje se javljaju.
//2.Dodajte polje "user" u "users" pomoću operatora. Spremite rezultat u novu varijablu i ispišite rezultat.
//3. Koju vrijednost vraćaju console.log izjave? Probajte zamjeniti let sa var.

"use strict";

// 1. 
var a = 78;
var b = 34;
myObject = { property1: 1, property2: 2 };

// 2. 
const users = [
    { name: "Fabio", surname: "Biondi" },
    { name: "Mario", surname: "Rossi" },
];
const user = { name: "Lorenzo", surname: "Verdi" };

const newUsers = [...users, user];
console.log(newUsers);

// 3. 
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log("The number is: " + i);
    }, 1000);
    console.log(i);
}

// Zamjena let sa var
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log("The number is: " + i);
    }, 1000);
    console.log(i);
}
