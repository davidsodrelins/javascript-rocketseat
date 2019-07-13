var appElement = document.querySelector('#app');
var inputElement = document.createElement('input');
var buttonElement = document.createElement('button');
var listElement = document.createElement('ul');

buttonElement.appendChild(document.createTextNode('Adicionar'));
inputElement.setAttribute('placeholder','Entre GitHub username');
listElement.setAttribute('id','repositorios');

appElement.appendChild(inputElement);
appElement.appendChild(buttonElement);
appElement.appendChild(listElement);

buttonElement.onclick = function(){
    searchUser();
};

function searchUser(){
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(response => {
        console.log("Usuário encontrado.")
        listElement.innerHTML = "";
        for (rep of response.data){
            add(rep.name);
        }
    })
    .catch(error => {console.warn(`O usuário ${inputElement.value} não existe!`);})
};

function add(repository){
    var itemElement = document.createElement('li');
    itemElement.appendChild(document.createTextNode(repository));
    listElement.appendChild(itemElement);
};









