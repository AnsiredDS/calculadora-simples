
function calc() {
    var num1 = Number(document.querySelector("#num1").value);
    var num2 = Number(document.querySelector("#num2").value);
    var op = document.querySelector("#select").value;
    var result;
    switch (op) {
        case 'add':
            result = num1 + num2; 
        break;
        case 'sub':
            result = num1 - num2;  
        break;
        case 'mult':
            result = num1 * num2; 
        break;
        case 'div':
            result = num1 / num2; 
        break;     
    }
    document.getElementById("result").innerHTML = result;
    console.log(num1);
    console.log(num2);
    console.log(result);
}