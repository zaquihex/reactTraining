import React, { Component } from 'react';
import { ButtonGeneral } from '../components/Buttons';

class Contador extends Component {
    //Función básica de una clase
    constructor(props) {
        super(props);
        //estado de la clase (es un objeto)
        this.state = {
            numero: 0
        }
        //variable de una clase que se puede acceder desde cualquier función
        this.numero = -1;
    }

    // Función sumar para cambiar el estado
    sumar = () => {
        this.setState({numero: this.state.numero + 1});
    }

    restar = () => {
        this.setState({numero: this.state.numero - 1});
    }

    //Función para pintar
    render() {
        return <div>
            <ButtonGeneral text="Sumar" click={this.sumar}/>
            <ButtonGeneral text="Restar" click={this.restar}/>
            <span>contador: {this.state.numero}</span>
        </div>;
    }
}

export default Contador;

/* Clase básica

import React, { Component } from 'react';

class Contador extends Component {

    //Función para pintar
    render() {
        return null;
    }
}

export default Contador;

* */
