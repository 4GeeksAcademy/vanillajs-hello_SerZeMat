/* eslint-disable */
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = function() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi tortuga"];
  let action = ["se comió", "meó", "aplastó", "rompió"];
  let what = ["mis deberes", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante mi comida",
    "mientras estaba conduciendo"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
