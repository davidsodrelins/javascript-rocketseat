//Criando e usando promises
//por padrão a promise é criada dessa forma. 
var myPromise = function(){ //uma nova variável é criada e vai receber uma funcion
    return new Promise(function(resolve, reject){ //essa function vai retornar uma nova promise que 
        //terá uma function passada como paramentro e os parametros response e reject
        //resolve: é o resultado da promise quando o resultado da request for de sucesso e o reject 
        //quando não for com sucesso
        var xhr = new XMLHttpRequest(); // criada uma variavel para armazenar a httprequest. elá dá a
        //funcionalidade do ajax e faz as requisições assincronas
        xhr.open('GET','https://api.github.com/users/davidweezing'); //o xrh.open acessa o link 
        //passado e pega o conteúdo, get é o método usado pada acessar o link, nesse caso a API
        // do github
        xhr.send(null); //envia a requisição aberta para o servidor.Se a solicitação 
        //for assíncrona (que é o padrão)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){ //quando a resposta volta do servidor, retorna o status 4
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText)); //JSON.parse() o retorno da request é um jason, então
                    //é preciso converser num objeto ou vetor.
                 }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
};

myPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });