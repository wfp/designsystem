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
};

export const Basic = (args) => (
  <Grid {...args}>
    <Col span={3} innerStyle={styles}>
      1
    </Col>
    <Col span={3} innerStyle={styles}>
      2
    </Col>
    <Col span={3} innerStyle={styles}>
      3
    </Col>
  </Grid>
);

export const MultipleRow = (args) => (
  <Grid {...args}>
    <Col span={4} innerStyle={styles}>
      1
    </Col>
    <Col span={4} innerStyle={styles}>
      2
    </Col>
    <Col span={4} innerStyle={styles}>
      3
    </Col>
    <Col span={4} innerStyle={styles}>
      4
    </Col>
  </Grid>
);

export const simpleGridLayout = (args) => (
  <Grid {...args}>
    <Col span={12} innerStyle={styles}>
      Header
    </Col>
    <Col span={4} innerStyle={styles}>
      Content one
    </Col>
    <Col span={4} innerStyle={styles}>
      Content two
    </Col>
    <Col span={4} innerStyle={styles}>
      Content three
    </Col>
    <Col span={12} innerStyle={styles}>
      Footer
    </Col>
  </Grid>
);

export const justifyAndAlign = (args) => (
  <Grid {...args} justify="center" align="center">
    <Col span={3} innerStyle={alignStyle}>
      1
    </Col>
    <Col span={3} innerStyle={styles}>
      2
    </Col>
    <Col span={3} innerStyle={{ backgroundColor: '#ccc' }}>
      3
    </Col>
  </Grid>
);

export const responsiveGridLayout = (args) => (
  <Grid {...args}>
    <Col lg={3} sm={4} innerStyle={styles}>
      content one
    </Col>
    <Col lg={3} sm={4} innerStyle={styles}>
      Content two
    </Col>
    <Col lg={3} sm={4} innerStyle={styles}>
      Content three
    </Col>
    <Col lg={3} sm={4} innerStyle={styles}>
      Content four
    </Col>
  </Grid>
);

const styles = {
  minHeight: '80px',
  backgroundColor: '#ccc',
};

const alignStyle = {
  minHeight: '40px',
  backgroundColor: '#ccc',
};
