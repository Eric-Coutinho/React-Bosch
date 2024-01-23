import Table from "react-bootstrap/Table";

import { useContext } from 'react'

import { DarkModeContext } from '../../Context/darkMode';
import { ExtratoContext } from "../../Context/extrato";
     
function TableComponent() {
  const { mode } = useContext(DarkModeContext);
  const { extrato } = useContext(ExtratoContext);
  
  const RenderItems = () => {
    return extrato.map(item => {
      return(
        <tr key={item.id}>
          <td>{item.tipo}</td>
          <td>{item.data}</td>
          <td>R${item.valor}</td>
          <td>R$0,00</td>
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
