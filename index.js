console.log(questao01());



function questao01(){
    var endereco = {
        rua: "2ª Travessa Martacência",
        numero: "100",
        bairro: "Aguas Claras",
        cidade: "Salvador",
        uf: "BA"
    }

    return "O usuario mora em " + endereco.cidade + "/" + endereco.uf + 
    ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + ", com nº "
    + endereco.numero;
};