import React from "react";
import styles from "./buttons.module.scss";
import Link from "next/link";
import classnames from "classnames";

export default function AnaboxSmart({ className, hideTrademark = false }) {
  const classNames = classnames(styles.anaboxSmart, className);

  return (
    <span className={classNames}>
      ANABOX{!hideTrademark && <sup>®</sup>} smart
    </span>
  );
}
