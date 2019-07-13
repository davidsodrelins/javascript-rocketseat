
function checaIdade(idade) { //criação da função | Create fuction
    //retorna resolve se for maior e reject se for menor
    return new Promise((resolve, reject)=> {
        //retorna depois de 2 seguns | return after 2 seconds
        setTimeout(() => { return (idade >= 18) ? resolve() : reject() }, 2000)
    })

}
checaIdade(20) //chamada da função | call function
    .then((response) => {
        console.log("Maior que 18");
    })
    .catch((error) => {
        console.log("Menor que 18");
    });

    