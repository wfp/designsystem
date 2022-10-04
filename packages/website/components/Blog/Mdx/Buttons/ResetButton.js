import React from "react";
import styles from "./buttons.module.scss";
import Link from "next/link";

export default function ResetButton() {
  return (
    <Link href="./buttons-and-leds">
      <a className={styles.resetButton}>
        {" "}
        <span />
        Reset-Loch
      </a>
    </Link>
  );
}
