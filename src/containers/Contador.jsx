import React, { Component } from 'react';
import { ButtonGeneral } from '../components/Buttons';

class Contador extends Component {

    //Función básica de una clase
    constructor(props) {
        super(props);

        //estado de la clase (es un objeto)
        this.state = {
            numero:  0,
            text: "david",
            numeroCaja: 0,
        };

        //variable de una clase que se puede acceder desde cualquier función
        this.numero =  0;
        this.lastClick = "Ninguna operación realizada";
        this.habilitar = true;

    }

        // Función sumar para cambiar el estado
    sumar = (numero) => {
        let usuario;
        if(this.state.text === "david"){
            usuario = "alejandro";
        }
        else{
            usuario = "david";
        }
        this.lastClick ="sumar";

        if(this.habilitar ===true){ 
            this.setState({numero: this.state.numero + this.state.numeroCaja, text: usuario});
        }
        
    }

    restar = () => {
        this.lastClick ="restar";
        if(this.habilitar ===true){
            this.setState({numero: this.state.numero - this.state.numeroCaja});
        }
        
    }

    dividir = () => {
        this.lastClick ="dividir";
        if(this.habilitar ===true){
            this.setState({numero: this.state.numero / this.state.numeroCaja})
        }
        if (!isNaN(this.state.numeroCaja)){
            this.setState({numero: this.state.numero / this.state.numeroCaja});
            }
        
    }


    //solo ha de hacerse el setState (actuaziar la variblae y pintar de nuevo), cuando el multiplicador sea un numero

    multiplicar = () => {
        this.lastClick ="multiplicar";
        if(this.habilitar ===true){
            this.setState({numero: this.state.numero * this.state.numeroCaja});
        }
        if (!isNaN(this.state.numeroCaja)){
            this.setState({numero: this.state.numero * this.state.numeroCaja});
        }
    }

    resetear = () => {
        this.lastClick ="resetear";
        this.setState({numeroCaja: 0, numero: 0});
    
    }



    habilitarDeshabilitar = () => {
      if (this.habilitar===false){
          this.habilitar=true
      }
      else{
        this.habilitar=false

      }
    }

    //Función para pintar
    render() {
        let botonDividir = null;
        // Condicional
        if(this.state.text === "david"){
            botonDividir = <ButtonGeneral text="Dividir" click={this.dividir}/>;
        }

        //bucles
        let operaciones= ["sumar","restar","dividir", "multiplicar", "resetear", "Habilitador/Deshabilitador"];
    
            if(this.state.numero%2 !== 0){
               operaciones= ["sumar","restar", "multiplicar", "resetear", "Habilitador/Deshabilitador"];
            }
    
        const listaBotones = operaciones.map((elemento)=>{
            let funcion;
            switch(elemento) {
                case "sumar": funcion = this.sumar; break;
                case "restar": funcion = this.restar; break;
                case "dividir": funcion = this.dividir; break;
                case "multiplicar": funcion = this.multiplicar; break;
                case "resetear": funcion = this.resetear; break;

            }

            return <ButtonGeneral text={elemento} click={funcion} />
        });

        return <div>
            {listaBotones}
            <input value={this.state.numeroCaja} onChange={(prop1) => {this.setState({numeroCaja: prop1.currentTarget.value}); }
            } />
            <span>Contador: {this.state.numero}</span>
            <div>última acción Usuario: {this.lastClick} </div>
            {/*<ButtonGeneral text="Sumar" click={this.sumar}/>
            <ButtonGeneral text="Restar" click={this.restar}/>
            {botonDividir}
            {this.state.text === "david" ? <ButtonGeneral text="Dividir" click={this.dividir}/> : null}
            <span> Contador: {this.state.numero}</span>
            <span>Contador: {this.state.text}</span>*/}
        </div>;
    }
}

export default Contador;