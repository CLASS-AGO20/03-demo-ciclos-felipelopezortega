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


}

let app = new App()

//Función que regresa la suma de los números pares del 0 al 20
console.log(app.sumarParesFor())

//Función que determina los números impares entre un intervalo
console.log(app.contarImparesFor(5,10))
console.log(app.contarImparesFor(10,5))