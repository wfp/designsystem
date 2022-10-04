import React from "react";
import styles from "./buttons.module.scss";
import Link from "next/link";

export default function UsbcConnector() {
  return (
    <Link href="./buttons-and-leds">
      <a className={styles.usbcConnector}>
        <span />
        USB-C Anschluss
      </a>
    </Link>
  );
}
