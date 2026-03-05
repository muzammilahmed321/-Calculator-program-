// calculator program

const display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

// add input to display
function appendToDisplay(input){

    if(input === "+" || input === "-" || input === "*" || input === "/"){
        
        if(display.value === "") return; // prevent operator first
        
        operator = input;
        firstNumber = display.value;
        display.value += input;
    }
    else{
        display.value += input;
    }
}

// clear display
function clearDisplay(){
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

// calculate result
function calculate(){

    try{

        if(operator === ""){
            display.value = "Error";
            return;
        }

        secondNumber = display.value.split(operator)[1];

        if(secondNumber === ""){
            display.value = "Error";
            return;
        }

        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        let result;

        if(operator === "+"){
            result = num1 + num2;
        }
        else if(operator === "-"){
            result = num1 - num2;
        }
        else if(operator === "*"){
            result = num1 * num2;
        }
        else if(operator === "/"){

            if(num2 === 0){
                display.value = "Cannot divide by 0";
                return;
            }

            result = num1 / num2;
        }

        display.value = result;

        firstNumber = "";
        secondNumber = "";
        operator = "";

    }
    catch(error){
        display.value = "Error";
    }
}