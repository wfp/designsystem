/* eslint-disable no-console */

import React from 'react';
import Link from '../../components/Link';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import Page from '../Page';
import { linkTo } from '@storybook/addon-links';

export default function Dashboard() {
  return (
    <Page
      title="Dashboard design"
      subTitle="Operational & Analytical applications"
    >
      <h3>When to use it?</h3>
      <p>
        Use the Dashboard pattern whenever you have to display data with a high
        content density.
      </p>
      <h4>Operational dashboard (Application)</h4>
      <p>
        Operational dashboards aim to impart information quickly to users as
        they are engaged in time-sensitive tasks. Main goals of the operational
        dashboard are to present all the information the user needs to take
        action and provide him with the tools for entering the information. The
        dasboard should help users to be quick, proactive, and efficient.
      </p>
      <h4>Analytical dashboard</h4>
      <p>
        Analytical dashboards provide the user with information used for
        analysis and decision making, and are less time sensitive and not
        focused on taking action. A primary goal is to help users make the best
        sense of the data, analyze trends and drive decision making.
      </p>
      <h3>When not to use?</h3>
      <p>
        Avoid using the dashboard pattern for editorial pages or pages where the
        content can't be structured.
      </p>
      <h3>How to use it?</h3>
      <p>
        Place{' '}
        <Link onClick={linkTo('Components', 'Module')}>
          Modules (sometimes called Cards)
        </Link>{' '}
        inside a <Link onClick={linkTo('Components', 'Wrapper')}>Wrapper</Link>{' '}
        component.
        <br /> An example can be found{' '}
        <Link onClick={linkTo('Templates', 'Application Page')}> here</Link>.
      </p>
      <h4>What are Modules?</h4>
      <p>
        Modules are surfaces that display content and actions on a single topic.
        They should be easy to scan for relevant and actionable information.
        Elements, like text and images, should be placed on them in a way that
        clearly indicates hierarchy.
      </p>
      <div className="row">
        <Module light className="col-xs-12 col-md-4 col-lg-4">
          <ModuleHeader>Contained</ModuleHeader>
          <ModuleBody>
            <p>A Module is identifiable as a single, contained unit.</p>
          </ModuleBody>
        </Module>
        <Module light className="col-xs-12 col-md-4 col-lg-4">
          <ModuleHeader>Independent</ModuleHeader>
          <ModuleBody>
            <p>
              A Module can stand alone, without relying on surrounding elements
              for context.
            </p>
          </ModuleBody>
        </Module>

        <Module light className="col-xs-12 col-md-4 col-lg-4">
          <ModuleHeader>Individual</ModuleHeader>
          <ModuleBody>
            <p>
              A card cannot merge with another card, or divide into multiple
              cards.
            </p>
          </ModuleBody>
        </Module>
      </div>
      Source: https://material.io/design/components/cards.html#anatomy
      <p>
        Put the name in the top left corner, align controls or actions to the
        top right corner of the Module and place the information in the content.
        The ModuleFooter can be used to show additional functionality like
        sharing or exporting.
      </p>
      <p>
        Using Modules has additional benefits of flexibility when it comes to
        responsive design.
      </p>
      <p>If possible use the full width of the screen as maximal width.</p>
      <ul className="wfp--story__list">
        <li>
          <Link
            href="https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c"
            target="_blank"
          >
            10 rules for better dashboard design by UX Planet
          </Link>
        </li>
        <li>
          <Link
            href="https://material.io/design/components/cards.html"
            target="_blank"
          >
            Cards in Material UI
          </Link>
        </li>
      </ul>
    </Page>
  );
}
