
"use client"
import Counter  from './counter.js';

let greet = (name) => "Hello, " + name;

let a=[];
let b=[1,2,3,4,5];
let c=["Cat", "Dog", "Rabbit", "Bird"];
let[animal1,animal2]=c;



export default function Page(){
return(<main>

    <Counter/>


    <button onClick={(button)}>Click me</button>
    <div>{typeof(greet)}</div>
<p>{a}</p>
<p>{b}</p>
<p>{c}</p>
<p>{b[4]}</p>
<p>{c[2]}</p>
<p>{animal1}</p>
<p>{animal2}</p>
<p>{calculate(5,10,add)}</p>
<p>{calculate(5,10,sub)}</p>

</main>)
}

let misc = [
    1,
    true,
    "three",
    { count: 4},
    function () {
        return "5";

    },
];

if (misc[1]){
    console.log(misc[2]); //"three"
    }

let count = misc[3].count;
console.log(count); //4

let fiveFunction = misc[4]; //function
//let emoji = fiveFunction(); 



let add = (a, b) => a+b;

let sub = (a, b) => a-b;

let calculate = (a,b,operation) => operation(a,b);
    


let getMultiplier = function (factor) {
    return function (number){
        return number * factor;
    };
};

let double = getMultiplier(2);
let triple = getMultiplier(3);

let result = double(5);
console.log(result);

result = triple(5);
console.log(result);

function button(){
    alert("Hello, Sam!");
}