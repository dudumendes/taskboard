import React from 'react';
import DevListRow from './DevListRow';

const DevList = ({ devs }) => {
  return (
    <table>
      <thead>
        <tr><td>ID</td><td>Nome</td><td>Sobrenome</td></tr>
      </thead>
      <tbody>
        {devs.map(dev => <DevListRow key={dev.id} dev={dev} />)}
      </tbody>
    </table>
  );
};

export default DevList;