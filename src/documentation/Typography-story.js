/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Typography', () => (
    <Page title="Typography" subTitle="Typefaces & Spacings">
      {/*<p>
      Typography plays a critical role in any design; in fact, it accounts for
      as much as 95% of everything we see on the Web. When done well, it adds
      personality to content, becomes its voice. When established poorly,
      typographic elements become unreadable, thus reducing the impact a given
      piece of content will have on the reader.
    </p>

    <p>
      In some cases, it will lead to problems with processing text, and thus
      increasing cognitive load on the user. The bigger the congnitive load is,
      the harder it is for users to complete their tasks.
    </p>*/}

      <h2>Typefaces</h2>

      <p>
        Open Sans is the primary typeface for user interfaces; it’s a round,
        humanist sans-serif, with incredibly warm appeal. It can be used for
        both headlines and paragraphs alike, as well as for interface elements.
      </p>

      <h3>How to use it</h3>

      <p>
        Open Sans is already included in the WFP UI's CSS. If you don't want to
        include the font you can use set{' '}
        <span className="wfp--inline-highlight">$css--font-face: false;</span>{' '}
        with scss.
      </p>

      <h2>Capitalization</h2>

      <Link href="https://cdn.wfp.org/guides/editorial/content/capitalization/" target="_blank">This guide</Link>{' '} explains rules for capatalization.

      <h2>Headings</h2>

      <p>
        Headings help to add a hierarchy to a page, and they are key identifiers
        for users reading a page. They should be used in an order that is
        relevant to the content of a page.
      </p>

      <Blockquote>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </Blockquote>
      {/*<h5>Heading 5</h5>*/}
      {/*<h6>Heading 6</h6>*/}

      <h3>Paragraph</h3>

      <p>
        Paragraph – Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua
        <sup>
          <a id="anker3" title="" href="#fn3">
            3
          </a>
        </sup>
        . At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren.
      </p>

      {/*<h3>Dos and Don’ts</h3>
    <ul>
      <li>
        Don’t try to mix two typefaces within a single section, such as a
        paragraph or a heading. If you need to differentiate a piece of text,
        use stressed emphasis or strong importance.
      </li>
      <li>
        Don’t try to mix different sizes of text within a single section or use
        editing tools to apply styling or colour to the text manually.
        Underlines are allowed only on links, but they belong to a different set
        of styles, separated from the above guidelines.
      </li>
      <li>
        Always keep the colour contrast in mind. Your copy should be readable
        and easy on the eye. Try to avoid plain white or black colours to style
        text and/or background. The basic body text colour is #303132; #ffffff
        is used for the background.
      </li>
      <li>
        Always keep your content plain and simple. Don’t add unnecessary
        formatting where it’s not required and leave styling of the content to
        your desiger. This will ensure all of it looks consistent.
      </li>
    </ul>*/}
    </Page>
  ));
