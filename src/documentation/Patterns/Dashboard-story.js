/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../components/Link';
import Page from '../Page';
import { linkTo } from '@storybook/addon-links';

storiesOf('Documentation|Patterns', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Dashboard', () => (
    <Page title="Dashboards" subTitle="Operational & Analytical applications">
      <h3>When to use?</h3>
      <h4>Operational dashboard</h4>
      <p>
        Operational dashboards aim to impart critical information quickly to
        users as they are engaged in time-sensitive tasks. Main goals of the
        operational dashboard are to present data deviations to the user quickly
        and clearly, show current resources, their status. View support actions,
        its a digital control room designed to help users be quick, proactive,
        and efficient.
      </p>

      <h4>Analytical dashboard</h4>
      <p>
        In contrast to Operational, Analytical dashboards provide the user with
        at-a-glance information used for analysis and decision making, and are
        less time sensitive and not focused on immediate action. A primary goal
        is to help users make the best sense of the data, analyze trends and
        drive decision making.
      </p>
      <h4>How to use?</h4>

      <p>
        Place <Link onClick={linkTo('Components', 'Module')}>Modules</Link>{' '}
        inside a <Link onClick={linkTo('Components', 'Wrapper')}>Wrapper</Link>{' '}
        component An example can be found{' '}
        <Link onClick={linkTo('Documentation|Samples', 'Application Page')}>
          here
        </Link>
        .
      </p>

      <p>
        Use Modules to seperate content into logical sections. Put the name in
        the top left corner, align controls or actions to the top right corner
        of the Module and place the information in the content. The ModuleFooter
        can be used to show additional functionality like sharing or exporting.
      </p>

      <p>
        Using Modules has additional benefits of flexibility when it comes to
        responsive design.
      </p>
      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c"
            target="_blank">
            10 rules for better dashboard design by UX Planet
          </Link>
        </li>
      </ul>
    </Page>
  ));
