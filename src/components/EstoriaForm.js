import React, { Component } from 'react'

const INITIAL_STATE = {
    titulo: "",
    pontos: 0,
    descricao: ""
}

export default class EstoriaForm extends Component {

    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
    }

    _handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = event => {
        event.preventDefault()
        const estoria = {...this.state}

        this.props.adicionarEstoria(estoria)
        this.setState({...this.state,...INITIAL_STATE})
    }

    render() {
        const {titulo, pontos, descricao } = this.state

        return (
        <div className="row">
            <form className="col s12" onSubmit={this._handleSubmit}>
                <h5>+1 Estória</h5>
                <div className="input-field col s12">
                    <input placeholder="Titulo" name="titulo" value={titulo} 
                        onChange={this._handleChange}/><br />
                    <input placeholder="Pontos"  name="pontos" value={pontos}
                        onChange={this._handleChange}/><br />
                    <input placeholder="Descricao" name="descricao" value={descricao} 
                        onChange={this._handleChange}/><br />
                    <button className="btn waves-effect waves-light" type="submit">Enviar</button>
                </div>
            </form>
        </div>
        )
    }
}