let numOne = "";
let numTwo = "";
let operator = null;

function setNum(num)
{
    let display = document.querySelector("#display");
    if(numOne == "")
    {
        numOne = num;
        display.textContent = numOne;
    }
    else if(operator == null && numOne.length<39)
    {
        numOne += num;
        display.textContent = numOne;
    }
    else if(numTwo == "" && operator != null)
    {
        numTwo = num;
        display.textContent = numTwo;
    }
    else if(numTwo != "" && numTwo.length<39)
    {
        numTwo += num;
        display.textContent = numTwo;
    }

    console.log("numOne: " + numOne);
    console.log("numTwo: " + numTwo);
    console.log("ops: " + operator);
}

function setOps(ops)
{
    if(numOne == "" && numTwo == "")
        return;
    
    if(numOne != "" && numTwo != "")
        operate();

    if(numOne == "" && document.querySelector("#display").textContent != "Divide by zero")
        numOne = document.querySelector("#display").textContent;
    
    switch(ops)
    {
        case "add":
            operator = function(a, b) {
                return Number(a)+Number(b);
            }
            break;
        case "subtract":
            operator = function(a, b) {
                return a-b;
            }
            break;
        case "multiply":
            operator = function(a, b) {
                return a*b;
            }
            break;
        case "divide":
            operator = function(a, b) {
                if(b == 0)
                    return "Divide by zero"

                return a/b;
            }
            break;
    }
}

function clearAll()
{
    numOne = "";
    numTwo = "";
    operator = null;

    document.querySelector("#display").textContent = "";
}

function operate()
{
    if(operator == null || numOne == "" || numTwo == "")
        return;

    let result = operator(numOne, numTwo);
    document.querySelector("#display").textContent = result;

    numOne = "";
    numTwo = "";
    operator = null;
}