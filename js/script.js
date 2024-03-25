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

let result = result.toFixed(2)

if (agePass < 18) {
    result = priceTicket - 0.20
    console.log("Prezzo scontato Minorenne");
    
} else if (agePass > 65) {
    result = priceTicket - 0.40
    console.log("Prezzo scontato Anziano");
}

document.getElementById("result").innerHTML = result
