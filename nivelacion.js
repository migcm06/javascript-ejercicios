//function obtenerPar(numero){
// if ( numero%2===0){
//     return "es numero par";
//     }
// else{
//     return "el numero es impar";
// }
// }

// let resultado = obtenerPar(50)
// console.log(resultado)


// function numeroMayor(numero1, numero2){
//     if (numero1 > numero2){
//         return `El numero mayor es ${numero1}`
//     }
//         else{
//             return `El numero mayor es ${numero2}`
//     }  

// }
// let resultado = numeroMayor (5,6);
//     console.log(resultado)


// const numeroMayor(numero1, numero2){
//     if (numero1 > numero2){
//         return `El numero mayor es ${numero1}`
//     }
//         else{
//             return `El numero mayor es ${numero2}`
//     }  

// }
// let resultado = numeroMayor (5,6);
//     console.log(resultado)


    const caja = (a,b) => { 
        if (a>b){ 
        return `el numero mayor es ${a}` 
    }else if (b>a){ 
        return `el numero mayor es ${b}` 
    }else return 'son iguales ' 
} 
let doraly = caja(7,9); 
console.log(doraly) 