import React from "react";
import styles from "./flex.module.scss";

export default function Link(props) {
  return <a className={styles.link} target="_blank" {...props} />;
}
