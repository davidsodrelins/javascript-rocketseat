//question 01
var appElement = document.querySelector("#app"); //busca a div com id='app' | get the div's id='app'
var btnElement = document.createElement('button'); //cria um elemento botão | crete a new button element
var inputElement = document.createElement('input');

inputElement.setAttribute('id','name');
inputElement.setAttribute('type','text');
inputElement.setAttribute('name','nome');

btnAddElement = document.createElement('button');
btnElement.setAttribute('class', 'botao');
var txtButtonElement = document.createTextNode('ADD');
btnAddElement.appendChild(txtButtonElement);

btnElement.setAttribute('class', 'botao'); //seta a classe botão ao button | set class botao to button
var textElement = document.createTextNode('Generate Square'); //cria o rótulo do botão | Create label of button
btnElement.appendChild(textElement); //acrescenta o rotulo ao botão | append label on button
btnAddElement.appendChild(txtButtonElement);
appElement.appendChild(btnElement); //acrescenta o botão na div app | append button on app div

appElement.appendChild(inputElement);
appElement.appendChild(btnAddElement);

btnAddElement.onclick = function(){
    add();
}
btnElement.onclick = function () { //configura a ação do botão criado com uma função | setup a funcion action to button 
    squareGenerate(); //função que desenha um quadrado | funcion to draw square
};

// ######## QUESTION 3 ############ 
var nomes = ["Diego", "Gabriel", "Lucas"];
var listElement = document.createElement('ul');
listElement.setAttribute('id','listName');
appElement.appendChild(listElement);


for(var i=0; i<nomes.length; i++){
    var itemtlistElement = document.createElement('li');
    itemtlistElement.appendChild(document.createTextNode(nomes[i]));
   // listElement.appendChild(itemtlistElement);
};

//########   END  QUESTION 3 #########
function squareGenerate() {
    var boxElement = document.createElement('div') //cria novo elemento | create a new element

    boxElement.onmouseover = function(){ //adicionada a propriedade onmoseover com a execução da função para mudar a cor
        boxElement.style.backgroundColor = getRandomColor(); //mudando a cor do quadrado
    } 
  
    boxElement.style.width = 200; // adiciona a largura 100 | set width 100
    boxElement.style.height = 200;// adiciona a altura 100 | set height 100
    boxElement.style.backgroundColor = "red"; //adiciona a cor vermelha | set red color
    boxElement.style.textAlign = 'center'; //adiciona a cor vermelha | set red color
    boxElement.style.margin = 'auto'; //adiciona a cor vermelha | set red color
    
    boxElement.appendChild(document.createTextNode(inputElement.value));

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

//#### QUESTAO 4 ####
function add(){
    var List = document.querySelector('ul'); // Pega a ul
    var inputElement = document.getElementById('name');//pega o input pelo id
    var itemElement = document.createElement('li'); //cria uma nova li
    var nameElement = document.createTextNode(inputElement.value); //cria o texto digitado no li
    itemElement.appendChild(nameElement); //adiciona o nome no li
    List.appendChild(itemElement); //coloca o li dentro do ul
    inputElement.value = ""; //deixa o input vazio
}
//#### QUESTAO 4 END #####