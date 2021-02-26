
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

let med_ari = result / numbers.length ;
console.log(med_ari)
 if( med_ari >20 ){
     console.log("valor maior que 20")
 } else {
     console.log("valor menor ou igual a 20")
 }
let higherNumber =0;
 for (let i = 0; i < numbers.length ; i++) {
    if ( numbers[i] >  higherNumber){
        higherNumber= numbers[i]
    }
  }
  console.log(higherNumber);

  /* --------------------------------------------------------------------------- */


 let numImp = 0;
  for (let i = 0; i < numbers.length ; i++) {
    if ( numbers[i]%2 !== 0 ){
        numImp++;
        
  }

} 
if ( numImp === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(numImp);
  }
  let minorNumber = numbers[0];
  for (let i = 0; i < numbers.length ; i++) {
     if ( numbers[i] < minorNumber){
         minorNumber = numbers[i]
     }
   }
   console.log(minorNumber);


    let lista25 = [];
    for (let i =0 ; i < numbers.length; i++){
        if ( numbers[i] <= 25 ){
    
            lista25.push(numbers[i] )
            };
    }

    console.log(lista25)
   
    lista25

    let dividirPor2 = [];
    let resultado  = [];

    for (let i =0 ; i <lista25.length; i++){
          resultado= lista25[i]/2 ;  
    
            dividirPor2.push( resultado )
        
    }
    console.log (dividirPor2)