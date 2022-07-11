import React from "react";
import styles from "./styles.module.scss";

export default function Caption({ children }) {
  return <caption className={styles.caption}>{children}</caption>;
}
