/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import Button from '../Button';
import InlineLoading from '../InlineLoading';

const props = () => ({
  success: boolean('Loading successful state (success)', false),
  description: text(
    'Loading progress description (description)',
    'Loading data...'
  ),
  successDelay: number(
    'The duration for successful state before `onSuccess` fires (successDelay)',
    1500
  ),
  onSuccess: action('onSuccess'),
});

storiesOf('InlineLoading', module)
  .addDecorator(withKnobs)
  .add('Inline loading (draft)', () => (
    <div>
      <InlineLoading {...props()} />
    </div>
  ))
  .add('UX example', () => {
    class MockSubmission extends PureComponent {
      state = {
        submitting: false,
        success: false,
      };

      handleSubmit() {
        this.setState({ submitting: true });

        // Instead of making a real request, we mock it with a timer
        setTimeout(() => {
          this.setState({ submitting: false, success: true });

          // To make submittable again, we reset the state after a bit so the user gets completion feedback
          setTimeout(() => this.setState({ success: false }), 1500);
        }, 2000);
      }

      render() {
        const { children } = this.props;
        const { submitting, success } = this.state;

        const handleSubmit = this.handleSubmit.bind(this);

        return children({
          handleSubmit,
          submitting,
          success,
        });
      }
    }

    return (
      <MockSubmission>
        {({ handleSubmit, submitting, success }) => (
          <div style={{ display: 'flex', width: '300px' }}>
            <Button kind="secondary" disabled={submitting || success}>
              Cancel
            </Button>
            {submitting || success ? (
              <InlineLoading
                style={{ marginLeft: '1rem' }}
                description="Submitting..."
                success={success}
              />
            ) : (
              <Button onClick={handleSubmit}>Submit</Button>
            )}
          </div>
        )}
      </MockSubmission>
    );
  });
