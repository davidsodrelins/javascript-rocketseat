//question 01
var appElement = document.querySelector("#app"); //busca a div com id='app' | get the div's id='app'
var btnElement = document.createElement('button'); //cria um elemento botão | crete a new button element

btnElement.setAttribute('class', 'botao'); //seta a classe botão ao button | set class botao to button
var textElement = document.createTextNode('Generate Square'); //cria o rótulo do botão | Create label of button

btnElement.appendChild(textElement); //acrescenta o rotulo ao botão | append label on button
appElement.appendChild(btnElement); //acrescenta o botão na div app | append button on app div

btnElement.onclick = function () { //configura a ação do botão criado com uma função | setup a funcion action to button 
    squareGenerate(); //função que desenha um quadrado | funcion to draw square
};

function squareGenerate() {
    var boxElement = document.createElement('div') //cria novo elemento | create a new element

    boxElement.style.width = 100; // adiciona a largura 100 | set width 100
    boxElement.style.height = 100;// adiciona a altura 100 | set height 100
    boxElement.style.backgroundColor = "red"; //adiciona a cor vermelha | set red color

    appElement.appendChild(boxElement); //acrescenta o novo elemento a div app | apend a new element to div app
};

