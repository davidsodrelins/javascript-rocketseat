

var enderecoElement = document.createElement('div');
var logradouro, uf, cidade, bairro;

enderecoElement.setAttribute('id','endereco');

document.body.appendChild(enderecoElement);

axios.get(`https://viacep.com.br/ws/${cepElement.value}/json/`)


.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.warn(error);
});
    