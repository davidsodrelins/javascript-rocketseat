//console.log(question01());
//pairs(3,30);

var skills =  ["Javascript", "ReactJS", "React Native"];
doHaveSkill(skills);


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
function pairs(x, y){
    for(x; x<=y; x++){
       console.log((x%2===0)?x:"");
    }
};

/*
This question require a search on vector to find a skill. If the 
Skill Javascrit exist on structure, return true else falso.
*/ 
function doHaveSkill(skills){
    console.log((skills.indexOf("Javascript")==-1)?false:true);
}