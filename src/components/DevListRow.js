import React from 'react';

const DevListRow = ({dev}) => {
  return(
    <tr>
      <td>{dev.id}</td>
      <td>{dev.nome}</td>
      <td>{dev.sobrenome}</td>
    </tr>
  );
};

export default DevListRow;