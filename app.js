const d = document,
 $currentDisplay = d.querySelector('.current-operand'),
 $prevDisplay = d.querySelector('.previous-operand'),
 $buttons = d.querySelectorAll('button');

let calculation = ['0'];
let acummulativeCalculation;

 function calculate(button){
    let value = button.textContent;
 
    if ( value == 'AC'){
        calculation = [];
        acummulativeCalculation = '0';
        $currentDisplay.textContent = '';
        $prevDisplay.textContent = '';
    } else if (value == '='){
        $prevDisplay.textContent = '';
        $currentDisplay.textContent = eval(acummulativeCalculation);
        calculation = [$currentDisplay.textContent];
    } else if ( value == 'DEL'){
        calculation.pop();
        acummulativeCalculation = calculation.join('');
        $currentDisplay.textContent = '';
    } else if (value == '+' ||
               value == '-' ||
               value == '*' ||
               value == '/' ){

        if (!calculation){
            return console.warn('Esta vacío')
        }

        let ultimoCaracter = calculation[calculation.length - 1];
        if (ultimoCaracter == '.'){
            return console.warn('No se puede operar con un punto')
        }
        if(!ultimoCaracter.match(/^[0-9]|[.]+$/)){
            return console.warn('Ya hay un operando')
        } else {
            calculation.push(value);
            acummulativeCalculation = calculation.join('');
            $prevDisplay.textContent = acummulativeCalculation;
            $currentDisplay.textContent = ''; 
        }

    } else if (value == '.'){

        let ultimoCaracter = calculation[calculation.length - 1];
        if(ultimoCaracter == '.' && value == '.'){
            return console.warn('No se pueden poner mas puntos')
        } else {
            calculation.push(value);
            acummulativeCalculation = calculation.join('');
            $currentDisplay.textContent = acummulativeCalculation; 
        }

        
    } else {
        let ultimoCaracter = calculation[calculation.length - 1];
        if(ultimoCaracter != '.' && !parseFloat(ultimoCaracter)) {
            console.log('El ultimo caracter es una operacion');
            calculation.push(value);
            acummulativeCalculation = calculation.join('');
            $currentDisplay.textContent = value; 
        } else{
            calculation.push(value);
            acummulativeCalculation = calculation.join('');
            $currentDisplay.textContent = acummulativeCalculation; 
        }
    }

    console.log(calculation);
    console.log(acummulativeCalculation);
 }

 $buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

