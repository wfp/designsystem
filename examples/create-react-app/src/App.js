import '@wfp/ui/src/globals/scss/styles.scss';

import React, { Component } from 'react';
import { Icon, Card, Hero, Button } from '@wfp/ui';
import {
  Module,
  ModuleHeader,
  ModuleBody,
  BodyContent,
  ModuleFooter,
} from '@wfp/ui';

import { iconAddGlyph } from '@wfp/icons';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Icon className="some-class" href="#" icon={iconAddGlyph} />
        <h3>Card example</h3>
        <Card
          isLink={false}
          kind="text-card"
          metadata="Publication"
          subTitle="Food security and climate change analyses, adaptation planning, and good practices in food security adaptation programming."
          title="The Climate Adaption Mangement and Innovation Initiative"
        />

        <h3>Hero example</h3>
        <Hero
          href="#"
          isLink
          kind="splash"
          subTitle={
            <>
              <div style={{ marginBottom: '1rem' }}>
                Cras dapibus. Aenean ut eros et nisl sagittis vestibulum. Fusce
                risus nisl, viverra et, tempor et, pretium in.
              </div>
              <Button
                disabled={false}
                iconDescription="Provide icon description if icon is used"
                iconReverse={false}
                kind="inverse"
                small={false}
                tabIndex={0}
                type="button">
                Read more
              </Button>
            </>
          }
          title="The Climate Adaption Mangement and Innovation Initiative"
        />

        <h3>Module Example</h3>
        {/* <Module centered={false}>
          <ModuleHeader>Module example</ModuleHeader>
          <ModuleBody>
            <BodyContent />
          </ModuleBody>
          <ModuleFooter>Module footer</ModuleFooter>
        </Module> */}
      </>
    );
  }
}

export default App;
