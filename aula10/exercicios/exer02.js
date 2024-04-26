let media=function(nota1,nota2,nota3){
    let media = ((nota1 + nota2 + nota3) /3)
    console.log(media .toFixed(2))
}
media(10,15,30)

let numPar=(num)=>{
    if ((num % 2)=== 0 ){
    console.log('esse número é par')
    }else { 
        console.log('esse número é impar')
    }
}
numPar(9)