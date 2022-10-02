import React from "react";
import { ImSpinner2 } from "react-icons/im";
import styles from "../assets/css/LoadingWidget.module.css"

export const LoadingWidget = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner2 className={styles.spinning} size={60} />
    </div>
  );
};

