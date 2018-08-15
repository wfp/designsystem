/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import RegularPage from './RegularPage';
import Wrapper from '../components/Wrapper';

import { Module, ModuleHeader, ModuleBody } from '../components/Module';

storiesOf(' Documentation.Sample Pages', module)
  .addDecorator(story => <RegularPage>{story()}</RegularPage>)
  .addWithInfo('Application Page', ``, () => (
    <Wrapper background="lighter" pageWidth="lg" spacing="md">
      <div className="row">
        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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

        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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

        <Module className="col-xs-12 col-md-6 col-lg-4" size="single">
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

        <Module className="col-xs-12 col-md-6 col-lg-6" size="single">
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

        <Module className="col-xs-12 col-md-6 col-lg-6" size="single">
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
    </Wrapper>
  ));
