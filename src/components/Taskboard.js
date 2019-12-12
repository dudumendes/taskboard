import React, {Component} from 'react'
import axios from 'axios'
import Estoria from './Estoria'
import EstoriaForm from './EstoriaForm'

const API_URL = 'http://localhost:3004/estorias/'

export default class Taskboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estorias: [] 
        }
    }

    componentDidMount() {
        this._buscarEstorias()
    }

    _buscarEstorias() {
        axios.get(API_URL)
            .then(response => {
                this.setState({estorias: response.data})
            })
    }

    _excluirEstoria(estoriaId) {
        axios.delete(API_URL + estoriaId)
            .then(resp => this._buscarEstorias())
    }

    _getEstorias() {
        return this.state.estorias.map(estoria => 
            <Estoria 
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} id={estoria.id} key={estoria.id} 
                onDelete={this._excluirEstoria.bind(this)}
                />)
    }

    _getTitulo(total) {
        if (total === 0) {
            return "Backlog vazio"
        } else if (total === 1) {
            return "1 estoria"
        } else {
            return `${total} estórias`
        }
    }

    _adicionarEstoria(estoria) {
        axios.post(API_URL, estoria)
            .then(resp => this._buscarEstorias())
    }
    
    render() {
        const estorias = this._getEstorias()
        const titulo = this._getTitulo(estorias.length)

        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                <h1 className="header center orange-text">Estórias</h1>
                <h3>{titulo}</h3>
                    {estorias}
                <EstoriaForm adicionarEstoria={this._adicionarEstoria.bind(this)} />
                
                </div>
            </div>
        )
    }

}