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
Basic.args = {
  gutter: 'xs',
  justify: 'flex-start',
  align: 'flex-start',
};

export const GutterAndGrow = (args) => (
  <Grid {...args} grow={true}>
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

GutterAndGrow.args = {
  gutter: 'xs',
  justify: 'flex-start',
  align: 'flex-start',
};

const description = `**Gutter** prop is set to add spaces between columns in the Grid component.
Use \`none\`, \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\` values to set spacing \`0\`, \`0.25\`, \`0.375\`, \`0.5\`, \`0.75\` and \`1\` respectively in \`rem\`

**Grow** prop set on Grid component is to force last row take 100% of container width. 
In this example \`grow\` is set to true and therefore causes the last row to take a 100% width
`;

GutterAndGrow.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const justifyAndAlign = (args) => (
  <Grid {...args}>
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

justifyAndAlign.args = {
  gutter: 'xs',
  justify: 'center',
  align: 'center',
};

const aligndesciption = `The grid is a flexbox container hence you can control it bu using justify-content and align-items properties.
This example set justify-content and align-content to \`center\`
`;

justifyAndAlign.story = {
  parameters: {
    docs: {
      storyDescription: aligndesciption,
    },
  },
};

export const responsiveGridLayout = (args) => (
  <Grid {...args}>
    <Col lg={3} sm={4} xs={4} innerStyle={styles}>
      content one
    </Col>
    <Col lg={3} sm={4} xs={4} innerStyle={styles}>
      Content two
    </Col>
    <Col lg={3} sm={4} xs={4} innerStyle={styles}>
      Content three
    </Col>
    <Col lg={3} sm={4} xs={4} innerStyle={styles}>
      Content four
    </Col>
  </Grid>
);

responsiveGridLayout.args = {
  gutter: 'xs',
  justify: 'flex-start',
  align: 'flex-start',
};

const responsivedesciption = `The grid breakpoint has 4 breakpoints \`lg\`, \`md\`, \`sm\` and \`xs\`. <br/>
By default it uses a \`lg\` breakpoint with screen 1200px and 12 columns layout. <br/> 
The \`md\` breakpoint with screen of 992px use 12 columns layout. <br/> However \`sm\` breakpoint with screen of 768 uses 8 column layout lastly
\`xm\` breakpoint with screen of 500 use 4 columns layout

**Calculations**

In the example below, each layout applies lg={3} which is use 3/12 calculation <br/>
It also has sm={4} and xs={4} which use 4/8  and 4/4 calculations respectively.
`;

responsiveGridLayout.story = {
  parameters: {
    docs: {
      storyDescription: responsivedesciption,
    },
  },
};

const styles = {
  minHeight: '80px',
  backgroundColor: '#ccc',
};

const alignStyle = {
  minHeight: '40px',
  backgroundColor: '#ccc',
};
