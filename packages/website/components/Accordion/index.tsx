import React from 'react';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from '@un/icons-react';
import styles from './styles.module.scss';

function Accordion({ title, children }) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordion_container}>
      <div
        className={styles.accordion_content}
        onClick={() => {
          setActive(!active);
        }}>
        <div>{title}</div>
        <>
          {active ? (
            <ChevronUp description="closed" />
          ) : (
            <ChevronDown description="open" />
          )}
        </>
      </div>

      {active && <div className={styles.accordion_subcontent}>{children}</div>}
    </div>
  );
}

export default Accordion;
