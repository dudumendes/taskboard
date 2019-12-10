import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import { createDev } from '../actions/devActions';
import DevForm from './DevForm'

class ManageDev extends Component {

    render() {
        if (this.props.redirect) {
            return <Redirect to='/devs' />
        }

        return (
            <div className="container">
                <h1>Gerenciar Desenvolvedor</h1>
                <DevForm onSubmit={this.props.createDev} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { redirect: state.devs.redirect };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createDev }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDev);