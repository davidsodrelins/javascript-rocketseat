//question 01
var appElement = document.querySelector("#app"); //busca a div com id='app' | get the div's id='app'
var btnElement = document.createElement('button'); //cria um elemento botão | crete a new button element

// ######## QUESTION 2 ############ 
var nomes = ["Diego", "Gabriel", "Lucas"];
var listElement = document.createElement('ul');
listElement.setAttribute('id','listName');
appElement.appendChild(listElement);

for(var i=0; i<nomes.length; i++){
    var itemtlistElement = document.createElement('li');
    itemtlistElement.appendChild(document.createTextNode(nomes[i]));
    listElement.appendChild(itemtlistElement);
};

//########   END  QUESTION 2 #########

btnElement.setAttribute('class', 'botao'); //seta a classe botão ao button | set class botao to button
var textElement = document.createTextNode('Generate Square'); //cria o rótulo do botão | Create label of button

btnElement.appendChild(textElement); //acrescenta o rotulo ao botão | append label on button
appElement.appendChild(btnElement); //acrescenta o botão na div app | append button on app div

btnElement.onclick = function () { //configura a ação do botão criado com uma função | setup a funcion action to button 
    //squareGenerate(); //função que desenha um quadrado | funcion to draw square
};

function squareGenerate() {
    var boxElement = document.createElement('div') //cria novo elemento | create a new element

    boxElement.onmouseover = function(){ //adicionada a propriedade onmoseover com a execução da função para mudar a cor
        boxElement.style.backgroundColor = getRandomColor(); //mudando a cor do quadrado
    } 
  
    boxElement.style.width = 100; // adiciona a largura 100 | set width 100
    boxElement.style.height = 100;// adiciona a altura 100 | set height 100
    boxElement.style.backgroundColor = "red"; //adiciona a cor vermelha | set red color

    appElement.appendChild(boxElement); //acrescenta o novo elemento a div app | apend a new element to div app
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
   
