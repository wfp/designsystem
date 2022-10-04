import React from "react";
import styles from "./buttons.module.scss";
import Link from "next/link";
import { Button } from "@un/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrightness } from "@fortawesome/pro-solid-svg-icons";
import classnames from "classnames";

export default function ColorLed({ animation, color, children }) {
  const colorLedAnimation = classnames(
    styles.colorLedAnimation,
    {
      [`${styles[animation]}`]: animation,
      [`${styles[color]}`]: color,
    },
    styles.colorLed
  );

  return (
    <Link href="./buttons-and-leds">
      <Button
        className={colorLedAnimation}
        // style={{ color: color }}
        kind="tertiary"
        small
        icon={<FontAwesomeIcon className={styles.icon} icon={faBrightness} />}
      >
        <span>{children}</span>
      </Button>
    </Link>
  );
}
