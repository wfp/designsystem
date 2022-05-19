import React from 'react';

import Grid from './Grid';
import Col from '../Col';
import markdown from './README.mdx';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  subcomponents: { Col },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
  /*argTypes: {
      children: { control: 'text' },
    },*/
};

export const Basic = (args) => (
  <Grid {...args}>
    <Col span={4} innerStyle={{ height: '80px', backgroundColor: '#ccc' }}>
      1
    </Col>
    <Col span={4} innerStyle={{ minHeight: '80px', backgroundColor: '#cee' }}>
      2
    </Col>
    <Col span={4} innerStyle={{ minHeight: '80px', backgroundColor: '#eec' }}>
      3
    </Col>
  </Grid>
);

export const MultipleRow = (args) => (
  <Grid {...args}>
    <Col span={4}>1</Col>
    <Col span={4}>2</Col>
    <Col span={4}>3</Col>
    <Col span={3}>3</Col>
    <Col span={3}>3</Col>
  </Grid>
);

export const simpleGridLayout = (args) => (
  <Grid {...args}>
    <Col span={12} innerStyle={{ height: '80px', backgroundColor: '#ccc' }}>
      Header
    </Col>
    <Col span={4} innerStyle={{ height: '80px', backgroundColor: '#cee' }}>
      Content one
    </Col>
    <Col span={4} innerStyle={{ height: '80px', backgroundColor: '#cee' }}>
      Content two
    </Col>
    <Col span={4} innerStyle={{ height: '80px', backgroundColor: '#cee' }}>
      Content three
    </Col>
    <Col span={12} innerStyle={{ height: '80px', backgroundColor: '#eec' }}>
      Footer
    </Col>
  </Grid>
);
