import React from 'react';
import { storiesOf } from '@storybook/react';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';
import Wrapper from '../Wrapper';

import 'flexboxgrid/dist/flexboxgrid.css';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const props = () => ({
  className: text('Additional class (className)', false),
  noMargin: boolean('Disable margin (noMargin)', false),
  fullHeight: boolean('Adapt to parents height (fullHeight)', false),
  light: boolean('Styling for white background (light)', false),
  dark: boolean('Styling with dark content (dark)', false),
  withHover: boolean('Add hover class (withHover)', false),
});

storiesOf('Components|Module', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div
      className="wfp--module__background"
      style={{ height: '100vh', width: '100%' }}>
      <Wrapper pageWidth="narrow">{story()}</Wrapper>
    </div>
  ))
  .add('Default', () => (
    <Module {...props()}>
      <ModuleHeader>Module Example</ModuleHeader>
      <ModuleBody>
        <p>
          Lorem Ipsum is dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </ModuleBody>
      <ModuleFooter>Module Footer Example</ModuleFooter>
    </Module>
  ))
  .add(
    'Multiple Headers',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,*/
    () => (
      <Module className="some-class">
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    )
  )
  .add(
    'No Header',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,*/
    () => (
      <Module className="some-class">
        <ModuleBody>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    )
  )
  .add(
    'No Header - Centered Content',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,*/
    () => (
      <Module className="some-class">
        <ModuleBody centered>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    )
  )
  .add(
    'Dark',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,*/
    () => (
      <Module dark className="some-class">
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
        <ModuleFooter>Module Footer Example</ModuleFooter>
      </Module>
    )
  )
  .add(
    'Light',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,*/
    () => (
      <Module light className="some-class">
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
        <ModuleFooter>Module Footer Example</ModuleFooter>
      </Module>
    )
  )
  .add(
    'With Grid',
    /*`
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. They can also use a css grid system.

      The use of flexboxgrid is recommended.
    `,*/
    () => (
      <div className="row">
        <Module className="col-xs-12 col-md-6 col-lg-4">
          <ModuleHeader>Module Example</ModuleHeader>
          <ModuleBody>
            <p>
              Lorem Ipsum is dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ModuleBody>
        </Module>

        <Module className="col-xs-12 col-md-6 col-lg-4">
          <ModuleHeader>Module Example</ModuleHeader>
          <ModuleBody>
            <p>
              Lorem Ipsum is dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ModuleBody>
        </Module>

        <Module className="col-xs-12 col-md-6 col-lg-4">
          <ModuleHeader>Module Example</ModuleHeader>
          <ModuleBody>
            <p>
              Lorem Ipsum is dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </ModuleBody>
        </Module>
      </div>
    )
  );
