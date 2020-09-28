import React, { Component } from 'react';

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

    //Función para pintar
    render() {
        return <div>
            <button onClick={this.sumar}>sumar</button>
            <span>contador: {this.state.numero}</span>
        </div>;
    }
}

export default Contador;
