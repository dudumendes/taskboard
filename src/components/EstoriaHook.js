import React, { useState } from 'react'

function EstoriaHook(props) {
    const [exibirEstoria, setExibirEstoria] = useState(false)

    let descricao;
    let textoBotao = "Exibir Estória"

    if (exibirEstoria) {
        descricao = <p>{props.descricao}<span className="badge white">{props.pontos}</span></p>
        textoBotao = "Ocultar Estória"
    }

    const _handleDelete = event => {
        event.preventDefault()
        props.onDelete(props.id)
    }

    const _handleClick = event => {
        event.preventDefault()
        setExibirEstoria(!exibirEstoria)
    }

    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card indigo darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">{props.titulo}</span>
                        {descricao}
                    </div>
                    <div className="card-action">
                        <a className="right" href onClick={_handleClick}>{textoBotao}</a>
                        <a className="right" href onClick={_handleDelete}>EXCLUIR</a>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstoriaHook