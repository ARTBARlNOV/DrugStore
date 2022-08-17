// release 0

// Пункт 1
let student0 ={};

// Пункт 2
let student1 = {
    firstName: "Petr",
    lastName: "Perviy",
};
// Пункт 3

student1.firstName = "Petya"
// Пункт 4

delete student1.firstName

//release 1

// Пункт 1
let group = [];

//Пункт 2
group[0] = student1;

// Пункт 3
let student2 = {
    firstName: "Ivan",
    lastName: "ivanov",
};

let student3 = {
    firstName: "Aleksey",
    lastName: "Makarov",
};

group[1] = student2;
group[2] = student3;

console.log(group);
