// test
// alert ("ciao")

const stringKm = prompt("quanti km vuoi percorrere?"); //string
console.log(stringKm, typeof stringKm);

const stringAge = prompt("quanti anni hai?"); //string
console.log(stringKm, typeof stringKm);

const numberKm = parseInt(stringKm) //number
console.log(numberKm, typeof numberKm);

const agePass = parseInt(stringAge) //number
console.log(agePass, typeof agePass);

const priceTicket = numberKm * 0.21;
console.log(priceTicket, typeof priceTicket);

let finalPrice = "";

if (agePass < 18) {
    finalPrice = priceTicket - 0.20
    console.log("Prezzo scontato Minorenne");
} else if (agePass > 65) {
    finalPrice = priceTicket - 0.40
    console.log("Prezzo scontato Anziano");
} else {
    finalPrice = priceTicket;
}

finalPrice = finalPrice.toFixed(2);

console.log(finalPrice);

document.getElementById("result").innerHTML = finalPrice.toFixed(2);