// arrays
let names = ['luigi','mario','yoshi'];

names.push("bob");//valid
// cant push onto is a string array
// names.push(3)

let numbers =[10, 20 ,30 ,40];

numbers.push(50);//valid
// can do
// numbers.push("BOB");

let mixed = ['ken', 4, "Bob", 5, true];

// valid because mixed array has three types, numbers, strings, boolen
mixed.push("jesse", 5);
mixed[0] = 3;//changes ken to 3 

// objects 
let  ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}
// cant change peoprty types
// ninja.name = 2 // invalid
ninja.age = 40;// valid
// cant edefine object and add properties
// ninja.skills = ['fighting','sneaking']//invalid

// valid
ninja={
    name:"yoshi",
    belt:"blue",
    age: 20
}