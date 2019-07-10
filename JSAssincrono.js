//Question 1
function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject){
        if(idade>=18){
            resolve();
        }else{
            reject();
        }
    });   
   };
   
   checaIdade(2)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.warn("Menor que 18");
});

var appElement = document.querySelector('#pp');
var inputElement = document.createElement('input');
inputElement.setAttribute('placeholder','Entre GitHub username');





