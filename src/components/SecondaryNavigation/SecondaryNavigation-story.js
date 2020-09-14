import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SecondaryNavigation,
  SecondaryNavigationTitle,
} from './SecondaryNavigation';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbHome from '../BreadcrumbHome';

import Tabs from '../Tabs';
import Tab from '../Tab';
import { pageWidths } from '../Wrapper';
import { text, select, withKnobs, boolean } from '@storybook/addon-knobs';

const props = {
  secondaryNavigation: () => ({
    name: text(
      'The form control name (name in <InputGroup>)',
      'radio-button-group'
    ),
    pageWidth: select(
      'Value of the selected button (valueSelected in <InputGroup>)',
      pageWidths,
      'default-selected'
    ),
    labelText: text(
      'Label text (labelText in <InputGroup>)',
      'Radio button group label'
    ),
    helperText: text(
      'Helper text (labelText in <InputGroup>)',
      'Radio button group helper'
    ),
    vertical: boolean('Vertical (vertical in <InputGroup>)', false),
  }),
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
    inline: true,
  },
  tab: {
    className: 'another-class',
  },
};

storiesOf('Components|SecondaryNavigation', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const secondaryNavigationProps = props.secondaryNavigation();
    return (
      <SecondaryNavigation
        {...secondaryNavigationProps}
        additional="additional Information">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/#">
              <BreadcrumbHome />
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
        </Breadcrumb>
        <SecondaryNavigationTitle>The Page Title</SecondaryNavigationTitle>
        <Tabs {...props.tabs} customTabContent={true}>
          <Tab
            {...props.tab}
            label="Tab label 1"
            href="http://www.de.wfp.org"
          />
          <Tab
            {...props.tab}
            label="Tab label 2"
            href="http://www.es.wfp.org"
          />
          <Tab
            {...props.tab}
            label="Tab label 3"
            href="http://www.us.wfp.org"
          />
          <Tab
            {...props.tab}
            label="Tab label 4"
            href="http://www.fr.wfp.org"
          />
        </Tabs>
      </SecondaryNavigation>
    );
  })
  .add('Heading only', () => (
    <SecondaryNavigation additional="additional Information">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/#">
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
      </Breadcrumb>
      <SecondaryNavigationTitle>The Page Title</SecondaryNavigationTitle>
    </SecondaryNavigation>
  ));
