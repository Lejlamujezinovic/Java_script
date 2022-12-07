//Zadatak 3
stepeni = Number(prompt("Unesite koliko ima stepeni"));

if(stepeni < 0){
    console.log("Smrzavanje");
}
else if(stepeni < 10){
    console.log("Veoma hladno");
}
else if(stepeni < 20){
    console.log("Hladno vreme");
}
else if(stepeni < 30){
    console.log("Normalna temperatura");
}
else{
    console.log("Veoma vruce");
}

//Zadatak 4
//Uneti dužine stranica trougla i proveriti da li je trougao jednakostranican, jednakokraki ili raznostranicni.

a = 15
b = 16
c = 5

if(a === b && a === c){
    console.log("jednakostranican");
}
else if(a === b || b === c || a === c){
    console.log("jednakokraki");
}
else{
    console.log("raznostranicni");
}

//Zadatak 5
//Unesite broj od 1-12 procitati broj i upisati koji jer to mesec i broj dana u mesecu.

a = Number(prompt("Uneti broj od 1 do 12"));


if(a === 1 || a === 3 || a === 5 || a ===7 || a === 8 || a === 10 || a === 12){
    console.log("Mesec ima 31 dan");
}
else if(a === 2){
    console.log("Mesec ima 28 dana");
}
else{
    conole.log("Mesec ima 30 dana");
}