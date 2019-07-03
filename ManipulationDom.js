//question 01
var btnElement = document.querySelector('button.botao');
var inputElement = document.querySelector('input[id=name]');

btnElement.onclick = function(){
    var text = inputElement.value;
    alert (text);   
};
