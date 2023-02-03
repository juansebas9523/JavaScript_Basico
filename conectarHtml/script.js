const h1 =document.querySelector('h1');
const formulario =document.querySelector('#form')
const input1 =document.querySelector('#calcular1');
const input2 =document.querySelector('#calcular2');
const btn =document.querySelector('#btncalcular');
const resultado =document.querySelector('#result');


formulario.addEventListener('submit', sumarInputValue);

function sumarInputValue(event){
//console.log({event});
event.preventDefault();
const suma= input1.value + input2.value;
resultado.innerHTML ="el resultado es:" + suma ;
} 