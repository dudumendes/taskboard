import React from 'react';
import { Link } from 'react-router-dom'
import { loadDev } from '../actions/devActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const DevListRow = (props) => {
  const { dev } = props
  
  return(
    <tr>
      <td>{dev.id}</td>
      <td>{dev.nome}</td>
      <td>{dev.sobrenome}</td>
      <td><Link to={`dev/${dev.id}`} 
        onClick={ () => props.loadDev(dev)}>Alterar</Link></td>
    </tr>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadDev }, dispatch)
}

export default connect(null, mapDispatchToProps) (DevListRow);