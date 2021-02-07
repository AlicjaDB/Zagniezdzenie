
import style from './css/index.scss';
import { sum } from "./sum";

console.log("Hello World");
console.log(sum(2,3));

let heading = document.querySelector("#demo"),
sumValue = sum(12,7);
heading.innerHTML = `12 + 7 = ${sumValue}`;


