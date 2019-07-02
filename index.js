//console.log(question01());
question02(3,30);


/*
This question is simple and easy because use one object and data 
and return the phrasal concatenated
*/
function question01(){
    var adress = {
        street: "2ª Travessa Martacência",
        number: "100",
        neighborhood: "Aguas Claras",
        city: "Salvador",
        state: "BA"
    }

    return "The user live in " + adress.cidade + "/" + adress.uf + 
    ", in neighborhood " + adress.neighborhood + ", on street " + adress.street + ", with nº "
    + adress.number;
};

/*
This question  require all pair number on the rang x and y.
I use ternary operador in console.log to print only pair number
for this, only use the mod function.
*/
function question02(x, y){
    for(x; x<=y; x++){
       console.log((x%2===0)?x:"");
    }
};
