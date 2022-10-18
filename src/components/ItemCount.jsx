import { useState } from "react";
import styles from "../assets/css/ItemCount.module.css"

export const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <><div className={styles.container}>
        <button className={styles.buttonModify} disabled={counter <= 0} onClick={decrease}> - </button>
        <span> {counter}</span>
        <button className={styles.buttonModify} disabled={counter >= stock} onClick={increase}> + </button>
      </div>
    <button className={styles.buttonAdd} disabled={counter === 0} onClick={() => onAdd(counter)}> Agregar</button></>
  );
};
