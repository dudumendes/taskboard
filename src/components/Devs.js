import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as devActions from '../actions/devActions'
import DevList from './DevList'
import { bindActionCreators } from 'redux'

class Devs extends Component {

    devRow(dev, index) {
        return <div key={index}>{dev.nome}</div>;
    }

    render() {
        return(
            <div className="container">
                <h1>Desenvolvedores</h1>
                <DevList devs={this.props.devs} />
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      devs: state.devs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(devActions, dispatch)
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Devs);
