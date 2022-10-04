import React from "react";
import styles from "./buttons.module.scss";
import Link from "next/link";

export default function BigButton({ children = "große Taste" }) {
  return (
    <Link href="./buttons-and-leds">
      <a className={styles.bigButton}>
        <span />
        {children}
      </a>
    </Link>
  );
}
