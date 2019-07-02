//Question 01
//console.log(question01());

//Question 02
//pairs(3,30);

//Quetion 03
//var skills =  ["Javascript", "ReactJS", "React Native"];
//doHaveSkill(skills);

//Question 04
var studyYears = 4;
experience(studyYears);

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
    //the function indexOf return -1 if the element is not found.
    console.log((skills.indexOf("Javascript")==-1)?false:true);
};

/*
This question requite to return the experiente level since years study
*/
function experience(studyYears){
    if(studyYears>0 && studyYears<=1){
        console.log("Beginer");
    }    
    if(studyYears>1 && studyYears<=3){
        console.log("Intermediary");
    }
    if(studyYears>3 && studyYears<=6){
        console.log("Advanced");
    }
    if(studyYears>=7){
        console.log("Jedi Master");
    }
    if(studyYears<0 || studyYears>100){
        console.log("Invalid Value");
    }
};
