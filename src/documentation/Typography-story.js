/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Blockquote from '../components/Blockquote';
import Link from '../components/Link';
import { List, ListItem } from '../components/List';
import { linkTo } from '@storybook/addon-links';

storiesOf('Design|Core', module)
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
        Open Sans is the typeface for user interfaces; it’s a round, humanist
        sans-serif, with incredibly warm appeal. It can be used for both
        headlines and paragraphs alike, as well as for interface elements.
      </p>
      <h3>How to use it</h3>
      <p>
        Open Sans is already included in the WFP UI's CSS. If you don't want to
        include the font you can use set{' '}
        <span className="wfp--inline-highlight">$css--font-face: false;</span>{' '}
        inside scss.
      </p>
      <h3>Other languages & styles</h3>
      <p>
        Open Sans provides various font styles and special language character
        sets, which can be found on{' '}
        <Link
          href="https://fonts.google.com/specimen/Open+Sans"
          target="_blank">
          Open Sans on fonts.google.com
        </Link>
      </p>
      <h2>Editorial</h2>
      <Blockquote title="Editorial Guidelines" type="warning">
        <p>
          All editorial guidelines can be found in{' '}
          <Link href="https://cdn.wfp.org/guides/editorial" target="_blank">
            this guide
          </Link>
        </p>
      </Blockquote>

      <h3>Capitalization and user interface: when to use or not.</h3>
      <p>
        This is an adaptation to user interfaces of the{' '}
        <Link
          href="https://cdn.wfp.org/guides/editorial/content/capitalization/"
          target="_blank">
          Capitalization section of the WFP Editorial Style Guide
        </Link>{' '}
        , and{' '}
        <Link
          href="https://communities.wfp.org/post/capitalization-titles"
          target="_blank">
          capitalization guidelines for WFPgo
        </Link>{' '}
        (intranet link).{' '}
        <Link
          href="https://www.gov.uk/guidance/content-design/writing-for-gov-uk"
          target="_blank">
          GOV.UK provides useful guidance
        </Link>{' '}
        on how to write for the user in plain English.
      </p>
      <p>
        <List kind="bullet">
          <ListItem>
            Capitalization is appropriate in titles of documents, publications,
            and for proper nouns.
          </ListItem>
          <ListItem>
            The labels and terms we use on user interfaces are neither proper
            nouns nor titles most of the time.
          </ListItem>
          <ListItem>
            Capitalization makes the text harder to scan and read, while
            sentence case is easier on the eye.
          </ListItem>
        </List>
      </p>

      <p>
        People tend to over-capitalize when writing in sentences, whereas
        <b>navigation labels</b>, <b>column</b> and <b>row headers</b>,{' '}
        <b>input fields</b> in forms,
        <b>action verbs</b> on <b>buttons</b> are sentences made of common nouns
        that should be easy to recognize and act upon.
      </p>

      <p>
        They work as <b>instructions</b> and <b>pointers</b> and as such must
        not be capitalized. This can be Distracting and Make Reading harder
        (compare with, this can be distracting and make reading harder).
      </p>

      <p>
        On user interfaces, we prefer <b>sentence case</b>, i.e. we capitalize
        the first word of the label, then use lower case except for proper nouns
        (e.g. <i>View document</i> vs <i>View Country Strategic Plan</i>) and
        words derived from proper nouns (e.g. <i>Italian</i> as the adjective
        derived from <i>Italy</i>).
      </p>

      <p>
        <b>Do not capitalize</b> these UI elements:
      </p>

      <p>
        <List kind="bullet">
          <ListItem>
            <b>Input field labels in forms</b> and <b>column headers</b>:
          </ListItem>
          <ListItem>
            the density of text labels and column headers would make the
            interface less usable if they were to be treated as proper nouns or
            titles.
          </ListItem>
          <ListItem>
            The same labels are used often as field labels and column headers
            and capitalizing them in tables and not in the forms would make the
            interface very inconsistent.
          </ListItem>
          <ListItem>
            <b>Navigation labels</b>: e.g. Commodity prices, Shipping rates,
            Imp/Exp restrictions.
          </ListItem>
          <ListItem>
            <b>Controlled lists in drop-down menus</b>: avoid as much as
            possible when creating a controlled vocabulary that will be
            displayed in a drop-down menu. If the list is originated from an
            external data source, try removing capitalization with frontend
            tools
          </ListItem>
          <ListItem>
            <b>Section headings</b>: e.g. Main documents; Technical reviews.
          </ListItem>
          <ListItem>
            <b>Titles of charts in dashboards</b>: apply the same rules for
            titles and headings: use sentence case and capitalize only proper
            nouns.
            <br />
            e.g. implementation plan; resource-based plan; management plan.
            Chart titles refer to the content of the plans and CO submissions,
            not to document titles,
          </ListItem>
        </List>
      </p>

      <h3>Word checklist</h3>
      <p>
        Refer to{' '}
        <Link
          href="https://cdn.wfp.org/guides/editorial/reference/wordindex/"
          target="_blank"
          rel="noreferrer">
          Word Index in the Editorial Style Guide
        </Link>
        . Then look here:
      </p>
      <List kind="bullet">
        <ListItem>Use sentence case (no capitals)</ListItem>
        <ListItem>
          These are common names, unless used in a title of a publication or a
          programme , I.e. part of proper noun or title.
        </ListItem>
        <ListItem>management plan</ListItem>
        <ListItem>implementation plan</ListItem>
        <ListItem>needs-based plan</ListItem>
        <ListItem>resource-based plan</ListItem>
        <ListItem>assignment plan</ListItem>
        <ListItem>line of sight</ListItem>
        <ListItem>smallholder farmers</ListItem>
        <ListItem>cash-based transfer</ListItem>
        <ListItem>country director (Country Director of X)</ListItem>
        <ListItem>country office (not “CO”)</ListItem>
        <ListItem>country operation management plan</ListItem>
        <ListItem>country portfolio budget</ListItem>
        <ListItem>country strategic plans</ListItem>
        <ListItem>country strategic review</ListItem>
        <ListItem>Use title case (capitalize)</ListItem>
        <ListItem>Strategic Goal</ListItem>
        <ListItem>Strategic Objective</ListItem>
        <ListItem>Strategic Result</ListItem>
        <ListItem>Strategic Outcome</ListItem>
        <ListItem>
          Management Plan (when referred to the title of the EB document, not
          the abstract content of the management plan)
        </ListItem>
      </List>
      <h3>DNS Naming</h3>
      <p>
        <Link
          href="https://newgo.wfp.org/documents/dns-conventions/"
          target="_blank">
          This guide
        </Link>{' '}
        explains rules for DNS namespace conventions.
      </p>

      <h2>Default formating</h2>
      <p>
        See the{' '}
        <Link onClick={linkTo('Button', 'Second')}>Story component</Link> for
        applying default styling.
      </p>
      <h2>Headings</h2>
      <p>
        Headings help to add a hierarchy to a page, and they are key identifiers
        for users reading a page. They should be used in an order that is
        relevant to the content of a page.
      </p>
      <Blockquote>
        <h1>Heading 1</h1>
        <List kind="simple" colon small>
          <ListItem title="font-size">2.25rem (36px)</ListItem>
          <ListItem title="line-height">1.25</ListItem>
          <ListItem title="font-weight">600</ListItem>
        </List>
        <h2>Heading 2</h2>
        <List kind="simple" colon small>
          <ListItem title="font-size">1.75rem (28px)</ListItem>
          <ListItem title="line-height">1.25</ListItem>
          <ListItem title="font-weight">600</ListItem>
        </List>
        <h3>Heading 3</h3>
        <List kind="simple" colon small>
          <ListItem title="font-size">1.25rem (20px)</ListItem>
          <ListItem title="line-height">1.25</ListItem>
          <ListItem title="font-weight">600</ListItem>
        </List>
        <h4>Heading 4</h4>
        <List kind="simple" colon small>
          <ListItem title="font-size">1.125rem (18px)</ListItem>
          <ListItem title="line-height">1.25</ListItem>
          <ListItem title="font-weight">600</ListItem>
        </List>
        <h5>Heading 5</h5>
        <List kind="simple" colon small>
          <ListItem title="font-size">1rem (16px)</ListItem>
          <ListItem title="line-height">1.25</ListItem>
          <ListItem title="font-weight">600</ListItem>
        </List>
      </Blockquote>
      {/*<h5>Heading 5</h5>*/}
      {/*<h6>Heading 6</h6>*/}

      <Blockquote>
        <h5>Paragraph</h5>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          <sup>
            <a id="anker3" title="" href="#fn3">
              3
            </a>
          </sup>
          . At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren.
        </p>
        <List kind="simple" colon small>
          <ListItem title="font-size">1rem (16px)</ListItem>
          <ListItem title="line-height">1.6</ListItem>
          <ListItem title="font-weight">400</ListItem>
        </List>
      </Blockquote>

      {/*<h3>Dos and Don’ts</h3>
    <ul>
      <ListItem>
        Don’t try to mix two typefaces within a single section, such as a
        paragraph or a heading. If you need to differentiate a piece of text,
        use stressed emphasis or strong importance.
      </ListItem>
      <ListItem>
        Don’t try to mix different sizes of text within a single section or use
        editing tools to apply styling or colour to the text manually.
        Underlines are allowed only on links, but they belong to a different set
        of styles, separated from the above guidelines.
      </ListItem>
      <ListItem>
        Always keep the colour contrast in mind. Your copy should be readable
        and easy on the eye. Try to avoid plain white or black colours to style
        text and/or background. The basic body text colour is #303132; #ffffff
        is used for the background.
      </ListItem>
      <ListItem>
        Always keep your content plain and simple. Don’t add unnecessary
        formatting where it’s not required and leave styling of the content to
        your desiger. This will ensure all of it looks consistent.
      </ListItem>
    </ul>*/}
    </Page>
  ));
