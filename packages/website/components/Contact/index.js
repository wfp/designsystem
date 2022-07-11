import React from "react";
import Kink from "./Kink";
import styles from "./styles.module.scss";

export default function Contact({
  className,
  currentSlide,
  currentSlideRelative,
  kinksEnabled,
  slideHeight,
  slideWidth,
  slideDepth,
  slides,
  style,
  height,
  l,
}) {
  return (
    <>
      <div
        className={`${className} ${styles.last}`}
        style={{
          ...style,
          transformOrigin: "top",
          transform: kinksEnabled
            ? `translateY(${slideHeight * 3 + 2 * l}px) translateZ(${
                l * 2
              }px) rotateX(${slideDepth}deg)`
            : undefined,
        }}
      >
        <Kink
          style={{
            height: `${slideHeight / 3}px`,
            transform: kinksEnabled
              ? `rotateX(${
                  (1.3 - (currentSlide == 4 ? currentSlideRelative : 0)) * 30
                }deg)`
              : undefined,
          }}
          kind="first"
        >
          <Kink
            style={{
              height: `${slideHeight / 3}px`,
              transform: kinksEnabled
                ? `rotateX(-${
                    (1.3 - (currentSlide == 4 ? currentSlideRelative : 0)) * 90
                  }deg)`
                : undefined,
            }}
            kind="second"
          >
            <Kink
              style={{
                height: `${slideHeight / 3}px`,
                transform: kinksEnabled
                  ? `rotateX(${
                      (1.3 - (currentSlide == 4 ? currentSlideRelative : 0)) *
                      120
                    }deg)`
                  : undefined,
              }}
              kind="third"
            />
          </Kink>
        </Kink>
      </div>
      <style jsx>{`
        .message {
          font-size: 17rem;
          position: absolute;
          top: 0;
          width: 100%;
          height: ${height / 3}px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          //clip-path: polygon(-100% -100%, 0, 100% -100%, 100% 100%, 0 170%);
        }
        .message div {
          margin-top: 5rem;
          margin-left: 5rem;
          width: 100%;
          height: 100%;
          color: #323232;
        }

        .message-text {
          display: block;
          font-weight: 800;
          line-height: 1;
          text-transform: uppercase;
          transform: rotate(-10deg);
        }

        .message--second div {
          position: absolute;
          top: -${height / 3}px;
          color: #000000;
        }
        .message--third div {
          position: absolute;
          top: -${(2 * height) / 3}px;

          color: #323232;
        }

        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .fold {
          top: 0;
          height: ${slideHeight}px;
          width: ${slideWidth}px;
          position: relative;
          //outline: 1px solid blue;
        }

        .fold-lighter {
        }

        .fold-screen {
          width: ${slideWidth}px;
          height: ${slideHeight}px;
          transform-style: preserve-3d;
          //outline: 5px solid green;
          transition: all 0.1s;
        }

        .inner-fold {
          height: ${height / 3}px;
          //outline: 2px solid green;
          transform-origin: top;
          transform-style: preserve-3d;
          position: relative;
        }
        .inner-fold > div {
          height: ${height / 3}px;
          //outline: 5px solid blue;
        }
        .inner-fold--second {
        }

        .section-no-overflow {
          overflow: hidden;
        }

        .section-text {
          position: absolute;
          display: flex;
          justify-content: center;
          //align-items: center;
          flex-direction: column;
          margin-left: 6rem;
          width: 20%;
          height: 100%;
          font-size: 1rem;
          color: #000;
        }
        .section-text h2 {
          font-size: 5rem;
          line-height: 1em;

          font-weight: 800;
          margin: 0;
          margin-bottom: 0.5rem;
        }
        .section-text h2:after {
          content: "";
          display: block;
          margin-top: 7px;
          width: 70px;
          height: 1px;
          border-radius: 3px;
          background: #000;
        }
        .section-text-alt {
          top: 0;
        }
        .section-text p {
          line-height: 1.75;
        }
        .section:nth-child(2n + 1) {
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
}
