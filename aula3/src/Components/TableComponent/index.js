import Table from "react-bootstrap/Table";

import { useContext, useState } from 'react'

import { DarkModeContext } from '../../Context/darkMode';
import { ExtratoContext } from "../../Context/extrato";
     
function TableComponent() {
  const { mode } = useContext(DarkModeContext);
  const { extrato } = useContext(ExtratoContext);
  
  const RenderItems = () => {
    return extrato.map(item => {
      return(
        <tr key={item.id}>
          <td>{item.forma}</td>
          <td>{item.data}</td>
          <td>{item.valor}</td>
        </tr>

      )
    })
  }

  return (
    <Table hover variant={mode ? "dark" : "light"}>
      <thead>
        <tr>
          <th>Carteira</th>
          <th>Data</th>
          <th>Valor</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        <RenderItems />
      </tbody>
    </Table>
  );
}

export default TableComponent;
