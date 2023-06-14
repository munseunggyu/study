import a from "./a.js";
import b from "./b.js";
import c from "./c.js";

console.log(a);
console.log(b);
console.log(c);

const btna = document.querySelector("#btn-a");
const btnb = document.querySelector("#btn-b");
const btnc = document.querySelector("#btn-c");
const display = document.querySelector(".display");
btna.addEventListener("click", () => {
  display.textContent = a;
});
btnb.addEventListener("click", () => {
  display.textContent = b;
});
btnc.addEventListener("click", () => {
  display.textContent = c;
});
