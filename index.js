import { Calculadora } from "./Calculadora.js";
import { Display } from "./Display.js";

const d = document,
 $valorActual = d.querySelector('.current-operand'),
 $valorPrevio = d.querySelector('.previous-operand'),
 $btnNumeros = d.querySelectorAll('[data-number]'),
 $btnOperadores = d.querySelectorAll('[data-operator]'),
 $btnBorrar = d.querySelector('.delete'),
 $btnBorrarTodo = d.querySelector('.clear');

const display = new Display($valorPrevio, $valorActual);

$btnBorrar.addEventListener('click', ()=> display.borrar())

$btnBorrarTodo.addEventListener('click', () => display.borrarTodo())

$btnNumeros.forEach($btn => {
    $btn.addEventListener('click', () => display.agregarNumero($btn.innerHTML))
})
 
$btnOperadores.forEach( $operador => $operador.addEventListener('click', ()=> {
    display.computar($operador.getAttribute('data-operator'))
}))

/* 
//Codigo Antiguo
let calculation = [];
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
        let result = eval(acummulativeCalculation);
        let resultStr = result.toString();
        if (resultStr.match(/./ig)) result = result.toFixed(2)
        $currentDisplay.textContent = result;
        calculation = [$currentDisplay.textContent];
    } else if ( value == 'DEL'){
        calculation.pop();
        acummulativeCalculation = calculation.join('');
        $currentDisplay.textContent = acummulativeCalculation;
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
 } */


