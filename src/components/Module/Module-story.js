import React from 'react';
import { storiesOf } from '@storybook/react';
import { Module, ModuleHeader, ModuleBody, ModuleFooter } from '../Module';
import Wrapper from '../Wrapper';


import 'flexboxgrid/dist/flexboxgrid.css';


storiesOf('Module', module)
  .addDecorator(story => <div className="wfp--module__background"><Wrapper pageWidth="narrow">{story()}</Wrapper></div>)
  .addWithInfo(
    'Single',
    `
      Modules are used to organize content in a structural manner.


      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.


      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,
    () => (
      <Module className="some-class" size="single">
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
  .addWithInfo(
    'Double',
    `
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,
    () => (
      <Module className="some-class">
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
      </Module>
    )
  )
  .addWithInfo(
    'No Header',
    `
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,
    () => (
      <Module className="some-class" size="single">
        <ModuleBody>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    )
  )
  .addWithInfo(
    'No Header - Centered Content',
    `
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. Module components can be
      'single' or 'double' with the default as 'double'.

      ModuleHeader and ModuleBody components hold the content of the
      Module
    `,
    () => (
      <Module className="some-class" size="single">
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
  ).addWithInfo(
    'With Grid',
    `
      Modules are used to organize content in a structural manner.

      Modules are separated into different components. They can also use a css grid system.

      The use of flexboxgrid is recommended.
    `,
    () => (
      <div className="row">
        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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
        </Module>

        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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
        </Module>

        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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
        </Module>
      </div>
    )
  );
