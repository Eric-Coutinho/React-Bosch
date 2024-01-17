import { useState } from "react";
import styles from "./styles.module.scss";

export default function FirstComponent() {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const [tarefas, setTarefas] = useState([])

  const RenderTarefas = () => {
    const buttonDelete = (index) => {
        const newTarefas = [...tarefas]
        newTarefas.splice(index, 1)
        setTarefas(newTarefas)
    }

    return tarefas.map((tarefas, index) => {
        return(
            <div className={styles.cardinfo} key={index}>
                <h1>{tarefas.nome}</h1>
                <hr></hr>
                <p>{tarefas.descricao}</p>
                <button type="button" onClick={buttonDelete} className={styles.cardButton}>X</button>
            </div>
        )
    })
  };

  function buttonAdd() {
    setTarefas([...tarefas,
        {
            nome : name,
            descricao : desc
        }
    ])
  }

  return (
    <>
      <div className={styles.container}>
      <RenderTarefas />
        <form className={styles.form}>
          <div className={styles.form__card}>
            <input
              className={styles.form__input}
              name="name"
              type="text"
              placeholder="Nome da tarefa"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.form__input}
              name="description"
              type="text"
              placeholder="Descrição da tarefa"
              onChange={(e) => setDesc(e.target.value)}
            />
            <button type="button" onClick={buttonAdd}>Nova tarefa</button>
          </div>
        </form>
      </div>
    </>
  );
}
