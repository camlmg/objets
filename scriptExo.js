"use strict";

let student={
    name:'Paula',
    favoriteFood:"burger",
    city:"Milan",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);