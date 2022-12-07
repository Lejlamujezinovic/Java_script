// //Zadatak1
// //
// a = 12;
// if(a>0){
//     console.log("Broj je pozitivan");
// }
// else if (a === 0){
//     console.log("Broj je jednak nuli");
// }
// else{
//     console.log("Broj je negativan");
// }

// //Zadatak2
// //Uneti dva broja i proveriti da li su jednaka. Ispisati rezultat  u konzoli

// a = prompt("Unesite prvi broj");
// b = prompt("Unesite drugi broj");
// if(a == b){
//     console.log("Brojevi su jednaki");
// }
// else if(a === b){
//     console.log("Brojevi nisu jednaki");
// }

//Zadatak3
//Unesite broj od 1 do 7 i ispisati koji je dan taj uneti broj

// a = Number(prompt("Uneti broj od 1 do 7"));


// if(a === 1){
//     console.log("Ponedeljak");
// }
// else if(a === 2){
//     console.log("Utorak");
// }
// else if(a === 3){
//     console.log("Sreda");
// }
// else if(a === 4){
//     console.log("Četvrtak");
// }
// else if(a === 5){
//     console.log("Petak");
// }
// else if(a == 6){
//     console.log("Subota");
// }
// else if(a == 7){
//     console.log("Nedelja");
// }
// else{
//     console.log("Nije dobro unet broj");
// }

//Zadatak4
//Uneti broj i proveriti da li je paran ili neparan.

broj = Number(prompt("Uneti neki broj"));
if (broj % 2 == 0){
    console.log("Broj je paran");
}
else if (broj % 2 == 1){
    console.log("Broj je neparan");
}
else{
    console.log("Greska");
}

//Zadatak5
//Uneti broj m i procitati vrednost. Prikazati vrednost n je 1
//Kada je m vece od 0, n je 0 kada je m=0 i -1 kada je m manje od 0

m = Number(promp("Uneti vrednost m"));
if (m > 0){
    n = 1;
}
else if (m === 0){
    n = 0;
}
else if (m < 0){
    n = -1;
}
console.log("Vrednost n je", n);

//Zadatak 6
//Uneti 3 broja i ispisati najveci broj

a = Number(promp("Uneti prvi broj"));
b = Number(promp("Uneti drugi broj"));
c = Number(promp("Uneti treci broj"));
if(a > b && a > c){
    console.log("Najveci broj je", a);
}
else if(b > a && b > c){
    console.log("Najveci broj je", b);
}
else if(c > a && c > b){
    console.log("Najveci broj je", c);
}
else{
    console.log("Greska");
}