import React, { useEffect, useState, useRef } from 'react';
import { motion, useDomEvent, useMotionValue } from 'framer-motion';
import styles from './lightbox.module.scss';
import { useGesture } from 'react-use-gesture';
import Image from 'next/image';

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

const Lightbox = (props) => {
  const [isOpen, setOpen] = useState(false);
  const domTarget = useRef(null);

  const scale = useMotionValue(1);

  if (typeof window != 'undefined')
    useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

  useGesture(
    {
      onPinch: ({ offset: [d, a] }) => {
        if (d > 1 && d <= 120) {
          scale.set(1 + d / 200);
        }

        if (isOpen === false && d >= 100) {
          setOpen(true);
        } else if (isOpen === true && d <= 100) {
          setOpen(false);
        }
      },

      onPinchEnd: ({ offset: [d, a] }) => {
        scale.set(1);
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <span className={`${styles.imageContainer} ${isOpen ? styles.open : ''}`}>
      <span className={`${styles.imageWrapper}`}>
        <span
          className={`${styles.aspectRatio}`}
          style={{
            aspectRatio: `${props.width} / ${props.height}`,
          }}
        />

        {props.title && (
          <caption className={styles.lightboxCaption}>
            <span>{props.title}</span>
          </caption>
        )}
        <span
          className={styles.closeOverlay}
          onClick={() => setOpen(false)}
          onTouchEnd={() =>
            setTimeout(() => {
              setOpen(false);
            }, 1300)
          }
        />
        <motion.span
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={transition}
          className={styles.shade}
          onClick={() => setOpen(false)}></motion.span>
        <motion.span
          {...props}
          ref={domTarget}
          className={styles.activeImage}
          onClick={() => setOpen(!isOpen)}
          layout
          style={{
            scale,
            aspectRatio: `${props.width} / ${props.height}`,
          }}>
          <Image
            {...props}
            sizes={isOpen ? ' 100vw' : '(max-width: 710px) 100vw, 868px'}
          />
        </motion.span>
      </span>
    </span>
  );
};

export default Lightbox;
