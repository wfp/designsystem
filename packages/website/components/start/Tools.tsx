import React from 'react';
import styles from './tools.module.scss';
import Link from 'next/link';
import MoreLink from '../MoreLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from '@un/react';
import {
  faBellPlus,
  faGlassWaterDroplet,
  faHandshakeAlt,
  faLeaf,
  faSatellite,
} from '@fortawesome/pro-light-svg-icons';
import { faFigma, faNpm } from '@fortawesome/free-brands-svg-icons';

/* interface PossibilitiesContainerProps {
  title?: string;
  background?: string;
  content: string | JSX.Element;
  link?: string;
  npmLink?: boolean;
  figmaLink?: boolean;
} */

function PossibilitiesContainer({
  title,
  content,
  link = '',
  npmLink,
  figmaLink,
}: any) {
  return (
    <div className={styles.container} /*style={{ background }}*/>
      {/*<div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
  </div>*/}
      <div className={styles.content}>
        <h4>
          {title}
          {npmLink && (
            <Link href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className={styles.npmLink} icon={faNpm} />
            </Link>
          )}
          {figmaLink && (
            <Link href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className={styles.figmaLink} icon={faFigma} />
            </Link>
          )}
        </h4>
        <p>{content}</p>
        <MoreLink href="posts" className={styles.moreLink}>
          Go to package
        </MoreLink>
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <Wrapper pageWidth="lg" className={styles.possibilities}>
      <h3>Tools & Helpers</h3>
      <div className={styles.possibilitiesWrapper}>
        <PossibilitiesContainer
          title="Themes"
          content={
            <>
              Exports the design tokens like colors, fonts, text styles,
              spacings directly into cross plattform design tokens using{' '}
              <a
                href="https://amzn.github.io/style-dictionary"
                target="_blank"
                rel="noreferrer">
                styled dictionary
              </a>
              .
            </>
          }
          background="#E7DFFF"
          icon={faSatellite}
          link="https://npmjs.com/package/@un/themes-core"
          npmLink
        />
        <PossibilitiesContainer
          title="React"
          content="The core library includes all essential components and can be used with css only or react. Tokens can be also used with your favorite component library"
          icon={faLeaf}
          link="https://npmjs.com/package/@un/react"
          npmLink
        />
        <PossibilitiesContainer
          title="Figma library"
          content="A Figma library providing the core for creating a design system with boilerplates for token generation and components."
          link="lorem"
          figmaLink
          icon={faHandshakeAlt}
        />
        <PossibilitiesContainer
          title="Styles"
          content="css and scss implementation of the core components ready to use with the react library or plain html"
          // background="#FFDFDF"
          icon={faBellPlus}
          link="https://npmjs.com/package/@un/styles"
          npmLink
        />
        <PossibilitiesContainer
          title="Icons"
          content={
            <>
              Transforming your icons and pictograms into a component library
              ready to use in your application using{' '}
              <a
                href="https://github.com/gregberge/svgr"
                target="_blank"
                rel="noreferrer">
                svgr
              </a>
              .
            </>
          }
          // background="#DFF0FF"
          icon={faGlassWaterDroplet}
          link="https://npmjs.com/package/@un/icons-core"
          npmLink
        />

        <PossibilitiesContainer
          title="Pictograms"
          content={
            <>
              Transforming your icons and pictograms into a component library
              ready to use in your application using{' '}
              <a
                href="https://github.com/gregberge/svgr"
                target="_blank"
                rel="noreferrer">
                svgr
              </a>
              .
            </>
          }
          // background="#DFF0FF"
          icon={faGlassWaterDroplet}
          link="https://npmjs.com/package/@un/icons-core"
          npmLink
        />

        <PossibilitiesContainer
          title="Humanitarian Icons"
          content={
            <>
              Transforming your icons and pictograms into a component library
              ready to use in your application using{' '}
              <a
                href="https://github.com/gregberge/svgr"
                target="_blank"
                rel="noreferrer">
                svgr
              </a>
              .
            </>
          }
          icon={faGlassWaterDroplet}
          link="https://npmjs.com/package/@un/icons-core"
          npmLink
        />
      </div>
    </Wrapper>
  );
}
