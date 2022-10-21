
function calc() {
    var num1 = Number(document.querySelector("#num1").value.replace(",","."));;
    var num2 = Number(document.querySelector("#num2").value.replace(",","."));;
    var operator = document.querySelector("#select").value;
    var result;

    

    switch (operator) {
        case 'addition':
            result = num1 + num2; 
        break;
        case 'subtraction':
            result = num1 - num2;  
        break;
        case 'multiplication':
            result = num1 * num2; 
        break;
        case 'division':
            if(num2 == 0) {
                document.getElementById("errorMessage").innerHTML = 'Valor do divisor não pode ser igual a 0.';
                return;
            }

            else {
                result = num1 / num2; 
            }
            
        break;     
    }
    if(isNaN(result) == true) {
        document.getElementById("errorMessage").innerHTML = 'ERRO: Um dos valores inseridos não é um número. Verifique os valores e tente novamente.';
        
    }

    else {
        document.getElementById("result").innerHTML = result;
        document.getElementById("errorMessage").innerHTML = '';
    }
    

}