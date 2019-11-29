import React, {Component} from 'react'
import Estoria from './Estoria'

export default class Taskboard extends Component {
    _getEstorias() {
        const estorias = [
            {
                id: 1,
                titulo: "Contratar Seguro",
                descricao: "Eu como usuario, gostaria de contratar um seguro",
                pontos: 20                
            },
            {
                id: 2,
                titulo: "Renovar Seguro",
                descricao: "Eu como usuario, gostaria de renovar meu seguro",
                pontos: 10                
            }
        ]

        return estorias.map(estoria => 
            <Estoria 
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} key={estoria.id} />)
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
    
    render() {
        const estorias = this._getEstorias()
        const titulo = this._getTitulo(estorias.length)

        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                <h1 className="header center orange-text">Estórias</h1>
                <h3>{titulo}</h3>
                    {estorias}
                />
                
                </div>
            </div>
        )
    }

}