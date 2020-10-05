import React, { Component } from 'react';
import { ButtonGeneral } from '../components/Buttons';

class Contador extends Component {
    //Función básica de una clase
    constructor(props) {
        super(props);
        //estado de la clase (es un objeto)
        this.state = {
            numero:  0,
            text: "david"
        };
        //variable de una clase que se puede acceder desde cualquier función
        this.numero =  0;
    }

    // Función sumar para cambiar el estado
    sumar = () => {
        let usuario;
        if(this.state.text === "david"){
            usuario = "alejandro";
        }
        else{
            usuario = "david";
        }
        this.setState({numero: this.state.numero + 2, text: usuario});
    }

    restar = () => {
        this.setState({numero: this.state.numero - 2});
    }

    dividir = () => {
        this.setState({numero: this.state.numero / 2});
    }

    multiplicar = () => {
        this.setState({numero: this.state.numero * 2});
    }

    //Función para pintar
    render() {
        let botonDividir = null;
        // Condicional
        if(this.state.text === "david"){
            botonDividir = <ButtonGeneral text="Dividir" click={this.dividir}/>;
        }

        //bucles
        const operaciones= ["sumar","restar","dividir", "multiplicar"];


        const listaBotones = operaciones.map((elemento)=>{
            let funcion;
            switch(elemento) {
                case "sumar": funcion = this.sumar; break;
                case "restar": funcion = this.restar; break;
                case "dividir": funcion = this.dividir; break;
                case "multiplicar": funcion = this.multiplicar; break;
            }

            return <ButtonGeneral text={elemento} click={funcion} />
        });

        return <div>
            {listaBotones}
            <span>Contador: {this.state.numero}</span>
            {/*<ButtonGeneral text="Sumar" click={this.sumar}/>
            <ButtonGeneral text="Restar" click={this.restar}/>
            {botonDividir}
            {this.state.text === "david" ? <ButtonGeneral text="Dividir" click={this.dividir}/> : null}
            <span>Contador: {this.state.numero}</span>
            <span>Contador: {this.state.text}</span>*/}
        </div>;
    }
}

export default Contador;


//si el texto del estado es david, entonces botondividir es = a la linea 44
