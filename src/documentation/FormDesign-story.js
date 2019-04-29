/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../components/Link';
import Page from './Page';
import Blockquote from '../components/Blockquote';

import TextInput from '../components/TextInput';

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  helperText: 'Optional helper text.',
  placeholder: 'Placeholder text',
};

const InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  invalid: true,
  invalidText:
    'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};

storiesOf('Documentation|General', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Form design', () => (
    <Page title="Form UX-Design" subTitle="Recommendations for form design">
      <h3>Provide Autosave</h3>

      <p>
        Especially longer forms should provide autosave by default. You should
        also provide a very clear feedback by displaying a message that shows
        when the last autosave happened or a Save-Button. The user should be
        always able to also save forms with an error.
      </p>

      <h3>Top-left aligned labels are best for readability & completion</h3>

      <p>
        Placing labels above input fields is preferable since research show
        these are better trackable for users than left-aligned labels{' '}
        <Link href="http://uxmovement.com/forms/why-infield-top-aligned-form-labels-are-quickest-to-scan/">
          read more
        </Link>
      </p>

      <Blockquote title="Example">
        <TextInput {...TextInputProps} />
      </Blockquote>

      <h3>Avoid placing inputs side-by-side.</h3>

      {/*<p>
      Eye-tracking studies have shown that simple one-column layouts are better
      than multi-column layouts with questions positioned side-by-side.
    </p>*/}
      <p>
        User attention should always be directed on one task at a time, 2 items
        on the same line will compete for attention as there is no visual
        priority between them, resulting in a heavier task for the user.
      </p>
      <p>
        The only exception to this rule is when the input needs multiple field
        elements like asking for dates (day, month, year) or time (hours and
        minutes), where multiple fields are expected to be on one line. Read{' '}
        <Link href="https://uxplanet.org/the-18-must-do-principles-in-the-form-design-fe89d0127c92">
          more
        </Link>{' '}
        about principles in form design.
      </p>

      <p>2 columns layout exceptions apply to:</p>

      <h5>
        1. Information that people perceive as one but need more than one input
        field to complete
      </h5>

      <ul className="wfp--story__list">
        <li>dd – mm – yyyy (date picker)</li>
        <li>amount – currency</li>
        <li>national prefix - phone number</li>
        <li>first name - second name - last name</li>
      </ul>

      <h5>2. Information that people will find in the same place</h5>

      <ul className="wfp--story__list">
        <li>CVV and credit card expiry date</li>
      </ul>

      <h5>
        3. Information that are complementary and/or more meaningful if read
        together
      </h5>

      <ul className="wfp--story__list">
        <li>currency - currency exchange rate</li>
      </ul>

      <h5>
        4. When one field is non editable and used for comparison/reference
        purposes
      </h5>

      <ul className="wfp--story__list">
        <li>country data input - RB data read only</li>
      </ul>

      <h3>Group related fields together into sections or steps</h3>

      <p>
        If your form has more than six fields, it’s considered good practice to
        group questions into logical sections or steps. Use &#x3C;FormGroup
        /&#x3E; for this behaviour.
      </p>

      <h3>Validate Fields after Users Submit the Form</h3>

      <p>
        Inline validation post submission minimizes completion times, form
        errors, and user frustration. Make sure you’re validating your fields
        when users are in revision mode, not completion mode, otherwise you’ll
        slow them down.{' '}
        <Link href="http://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/">
          read more
        </Link>
      </p>

      <h3>Avoid Multistep (Wizard) forms if not necessary</h3>

      <p>It is okay to place more than 10 inputs on a page.</p>

      <h3>Multistep (Wizard) Forms</h3>
      <p>Apply to these rules when developing a wizard form:</p>
      <ul className="wfp--story__list">
        <li>
          Keep the number of steps at the minimum{' '}
          <Link
            href="https://uxplanet.org/wizard-design-pattern-8c86e14f2a38"
            target="_blank">
            read more
          </Link>
        </li>
        <li>
          A review step is mandatory. This step should also do a server-side
          check of all data entered and show a summary.
        </li>
        <li>
          Show errors when the user wants to change a page (or do live
          validation)
        </li>
        <li>
          Stop the user from moving to another page when wrong content was
          entered (make sure it is possible to move to other pages when no
          content is entered, except when it is needed on the following pages)
        </li>
        <li>Use checkmark indicator once wizard page is filled completely.</li>
        <li>Use warning indicator if some content is filled</li>
      </ul>
      <h3>Be clear with your error messages</h3>
      <p>
        It doesn’t matter what type of validation you use, you should always use
        inline errors. Use them ‘just right here’, in context. But not somewhere
        else on the pages. The natural mapping here is your best friend.
        <Blockquote title="Example">
          <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            {...InvalidPasswordProps}
          />
        </Blockquote>
        And, more importantly, always try to explain the root of the problem.
        Try to use a human language and explain what exactly the user/the system
        made wrong, and what exactly should be fixed/filled.
      </p>

      <h3>Before submitting content provide dialog modal</h3>
      <p>
        Always ask the user before submitting input. Do not ask if the user only
        saves the input.
      </p>
    </Page>
  ));
