function calc() {
let val1 = document.getElementById('val1').value;
let val2 = document.getElementById('val2').value;

parseInt(val1);
val1 = parseInt(val1)
parseInt(val2)
val2 = parseInt(val2)

let resultat = val1 + val2

document.getElementById('resultat').innerText = resultat;


console.log(resultat);

}
