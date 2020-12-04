export default class App {

    sumarParesFor(){
        
        let suma = 0

        for( let i = 0; i <= 20; i = i + 2 ){

            if(suma % 2 === 0){

                suma = suma + i
            }
            
        }

        return suma;
    }

    contarImparesFor(inicio, fin){
       
        let impares = 0

        if(inicio > fin){

            let newInicio = inicio

            inicio = fin

            fin = newInicio

        }

        for(let i=inicio; i<=fin; i = i + 2){

            if(i!==0){

                impares = impares + 1
            }
        }

        return impares
    }

    sumarParesWhile(){

        let i = 1

        let suma = 0

        while( i <= 20){

            if (i % 2 ===0){

            suma = suma + 1
            }

        }

        i = i + 1

        return suma
    }

    contarImparesWhile(inicio, fin){

        let impares = 0

        while(inicio <= fin){

            if (inico!==0){

                impares = impares + 1
            }

            inicio++
        }

    }

}

let app = new App()

//Función que regresa la suma de los números pares del 0 al 20
console.log(app.sumarParesFor())

//Función que determina los números impares entre un intervalo
console.log(app.contarImparesFor(5,10))
console.log(app.contarImparesFor(10,5))

//Función que suma los números pares entre 1 y 20
console.log(app.sumarParesWhile())

//Función que determina cuantos números impares hay en un intervalo
console.log(app.contarImparesWhile(12,20))