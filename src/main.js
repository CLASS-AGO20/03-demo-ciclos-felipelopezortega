export default class App {

    sumarParesFor(){
        
        let suma = 0

        for( let i = 0; i <= 20; i = i + 2 ){

            if(suma%2 === 0){

                suma = suma + i
            }
            
        }

        return suma 
    }


}

let app = new App()

//Función que regresa la suma de los números pares del 0 al 20
console.log(app.sumarParesFor())
