import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.Counter}>
      <button className={styles.minus} onClick={() => setCount(count - 1)}>
        -
      </button>
      <div className={styles.display}>
        <p>Current value</p>
        <p>{count}</p>
      </div>
      <button className={styles.plus} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
