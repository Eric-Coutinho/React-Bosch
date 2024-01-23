import FormComponent from "../../Components/FormComponent";
import styles from "./styles.module.scss";
import "./styles.module.scss";

export default function NewMusicPage() {
  return (
    <div className={styles.BodyForm}>
      <h1 style={{marginBottom: '0.5em'}}>Adicionar Música</h1>
      <FormComponent />
    </div>
  );
}
