import FormComponent from "../../Components/FormComponent";
import Image from "../../Components/Image";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import "./styles.module.scss";

export default function PagamentoPage() {
  return (
    <div className={styles.BodyForm}>
      <h1 style={{marginBottom: '0.5em'}}>Adicionar Pagamento</h1>
      <FormComponent />
    </div>
  );
}
