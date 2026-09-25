 

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let output = document.getElementById("output");




function addition() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let result = a + b;

    output.innerHTML += a + " + " + b + " = " + result + "<br>";
}




function subtraction() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let result = a - b;

    output.innerHTML += a + " - " + b + " = " + result + "<br>";
}




function multiplication() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let result = a * b;

    output.innerHTML += a + " × " + b + " = " + result + "<br>";
}




function division() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    if (b === 0) {

        output.innerHTML += "Cannot divide by 0<br>";

    } else {

        let result = a / b;

        output.innerHTML += a + " ÷ " + b + " = " + result + "<br>";
    }
}




function exponential() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let result = Math.pow(a, b);

    output.innerHTML += a + " ^ " + b + " = " + result + "<br>";
}




function remainder() {

    let a = Number(num1.value);
    let b = Number(num2.value);

    if (b === 0) {

        output.innerHTML += "Cannot calculate remainder with 0<br>";

    } else {

        let result = a % b;

        output.innerHTML +=
            "Remainder of " + a + " ÷ " + b + " = " + result + "<br>";
    }
}




function resetCalculator() {

    num1.value = "";

    num2.value = "";

    output.innerHTML = "";
}