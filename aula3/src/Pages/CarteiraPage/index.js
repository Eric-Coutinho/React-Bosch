import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import "./styles.module.scss";
import TableComponent from "../../Components/TableComponent";

export default function CarteiraPage() {

  return (

    <div className={styles.BodyForm}>
      <h1 style={{marginBottom: '0.5em'}}>Extrato</h1>
      <TableComponent />
    </div>
  );
}
