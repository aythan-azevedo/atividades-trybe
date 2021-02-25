let a = 3 ;
let b = 7 ;
let ad =  a + b ;
let sub = a - b ;
let mul = a * b ;
let div = a/b; 

console.log(ad);
console.log(sub);
console.log(mul);
console.log(div);
if ( a % b == 0){
    console.log ("multiplo");
} else if (  a% b != 0 ){
    console.log ("não é multiplo" )
}
let  ab =5;
let ac = 4;
let  cb = 8;
let maiorSubstancial ;

if ( ab > ac  ){
    maiorSubstancial = ab ;

} else if (   ab < ac ){
    maiorSubstancial = ac ;

} 
if ( maiorSubstancial >  cb   ) {
    console.log( maiorSubstancial);
    
}else if ( cb > maiorSubstancial){
    console.log ( cb);
} else {
    console.log( erro );
}

let numero =0;

if (numero > 0 ){
    console.log( "positivo ")
}else if (numero < 0){
    console.log( "negativo ")
} else {
    console.log( "zero ")
}

let angA = 60;
let angB = 90;
let angC = 30;
let angD = 40;
let soma = angA + angB + angC ;
let soma2 = angA + angB + angD;

if ( soma2 == 180 ) {
    console.log( "true")
} else  {
    console.log( "erro ")
}

let peca = "bispo"

   switch( peca.toLowerCase()  ){
       case "cavalo":
       console.log(  "em L" );
       break;
       default: console.log(" erro")

   }

   let nota =72;

if (  nota >= 90 && nota <=100 ){
    console.log( "A" )
}else
if ( nota >= 80 && nota <=100){
    console.log(" B ")
}else 
if ( nota >= 70 && nota <=100){
    console.log("C")
}else 
if ( nota >= 60 && nota <=100){
    console.log( "D")
}else 
if ( nota >= 50  && nota <=100){
    console.log( "E" )
}else if(  nota < 50  && nota <=100 && nota >0) {
    console.log ( "F")
} else {
    console.log ("erro ")
}
;
let num1 = 4;
let num2 =7;
let num3=1;
let isEven = false;

if ( num1%2 === 0 || num2%2 === 0 || num3%2===0) {
    isEven= true;
} ;
console.log(isEven);
if ( num1%2 !=0 || num2%2 !=0 || num3%2 !=0) {
    isEven= true;}
console.log(isEven);