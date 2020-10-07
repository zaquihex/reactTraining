# reactTraining
Project to train with react and programming.

#Comandos
npm start
ctrl + s -> guardar

#JSX (HTML) - dentro del return (render)

IMPORTANTE -> EL RETURN SOLO DEVOLVERÁ UN SOLO/UNICO ELEMENTO.

<div></div> -> encapsula lo que te de la real gana
<span></span> -> textos cortos
<p></p> -> textos largos
<a /> links
<img /> imagenes

w3school - mucha info


----------
Variables
1º constante -> const usuario = "David";
2º puede cambiar -> let (crea una variable que puedess volver a ponerle un valor) usuario = "David";
texto -> const variable = "texto"
numero -> const variable = 42
lista -> const colores = ["naranja", "rojo"]
objeto (conjunto de variables) -> const persona = {nombre: "david", altura: 175}
        -> persona.nombre = david
        -> persona.altura = 175

debugger -> pausa la ejecución en consola en la web, tiene que estar la consola para que se pare. F12/boton derecho inspeccionar

//Condicionales
const permisoCrear = "si";
if() {
} else {}

switch(elemento) {
 case valor: lo que quieras hacer; break;
 default: lo que quiera por defecto;
}

// Bucles
lista.map((valor)=>{
return ...
})

["uno","dos",3].map((valor)=>{
return valor;
})

--------------------------------------------------------

Lenguages
-> html (jsx), javascript
-> estilos: css, scss, sass

Librerias
-> React
-> Angular (javascript + html )

----------------------------------------------------------------------------------------------------------------

RESUMEN

 - CREACIÓN DE VARIABLES
    - razones: 
        - forzar el pintar/renderizar cada vez que un valor cambia.
            1º en el constructor de la clase, dentro del estado, se crea la variable.
                (Ejemplo) -> constructor(){
                                this.state = {
                                  $nombreVariable: $valor,  
                                };
                             }
            2º cambiar la variable donde toque (dentro de una función)
                (Ejemplo) -> this.setState({$nombreVariable: $nuevoValor});
               
       - Variable para conservar un valor sin que se vea afectado por los renderizados. (Variable de clase)
            1º Crear variable de clase, dentro del constructor y fuera del estado
                (Ejemplo) -> constructor(){
                                this.$nombreVariable = $valor;
                             }
            2º Cambiar de variable dentro de una función
                (Ejemplo) -> this.$nombreVariable = $nuevoValor;
               
        - cambiar de valor dependiendo de una función o una condición antes de pintar/renderizar.
            -cómo:
                - let $nombreVariable = $valor;
                    El valor puede ser de los siguientes tipos:
                        (Ejemplo) número -> let contador = 5;
                        (Ejemplo) texto -> let nombre = "David";
                        (Ejemplo) lista -> let numeros = [1,2,3];
                        (Ejemplo) objeto -> let persona = {nombre: 'David', apellido: 'Lazaro'};
                        
        
 - FUNCIONES:
    - razones: Modificar una variable
        (Ejemplo) -> $nombreFuncion = ($propiedadesSeparadasPorComa) => { ... }
            (Ejemplo Practico) -> 
                multiplicar = (multiplicador) => {
                    this.setState({contador: this.state.contador * multiplicador});
                }
                // Ejemplo de llamada a esta funcion -> this.multiplicar(5);

    LLamar a una función
        - En el caso que está dentro del return del render (será el valor de una propiedad) -> this.$nombreFunción
            (Ejemplo) <ButtonGeneral click={this.multiplicar} />
        - En el caso de que llames a una función dentro de otra función -> this.$nombreFuncion($propiedadesSeparadasPorComa);
            (Ejemplo) this.multiplicar(7);
            
 CONDICIONALES
    - razones: cambiar una variable de una forma u otra, dependiendo de una condicion
        (Ejemplo) if($condicion) else {}
            Comentarios:
                - el else es opcional
                la condición es algo como esto:
                    (Ejemplo1) contador === 0 // contador es igual a 0
                    (Ejemplo2) this.state.nombre !== "David" // nombre es distinto de "David"
                    (Ejemplo3) contador > 5 // contador es mayor que 5
                    
BUCLE
    - razones: evitar hacer algo muchas veces
    Ejemplo1 -> $lista.map($nombreElementoLista => {...});
    Ejemplo1 visual -> let listaPor2 = [1,2,3].map(numero => {return numero * 2}); // El resultado es: [2,4,6]
    Ejemplo2 -> $lista.forEach($nombreElementoLista => {...});
    Ejemplo2 visual -> 
        let numeroSumado = 0; 
        let lista = [1,2,3];
        lista.forEach(numero => {numeroSumado = numeroSumado + numero; } // numeroSumado es 6
    