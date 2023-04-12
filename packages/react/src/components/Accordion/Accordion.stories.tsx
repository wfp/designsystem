import React from 'react';
import markdown from './README.mdx';
import { Accordion, AccordionItem } from '.';

export default {
  title: 'Components/Navigation/Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
  },
};

const items = [
  {
    header: 'What is Lorem Ipsum?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    header: 'Where does it come from?',
    content: 'Quisque eget luctus mi, vehicula mollis lorem...',
  },
  {
    header: 'Why do we use it?',
    content: 'Suspendisse massa risus, pretium id interdum in...',
  },
];

export const RegularAnchorNavigation = (args) => (
  <Accordion>
    {items.map(({ header, content }, i) => (
      <AccordionItem header={header} key={i}>
        {content}
      </AccordionItem>
    ))}
  </Accordion>
);

RegularAnchorNavigation.args = {
  title: 'Title',
};

const anchorsourcecode = `
import { AnchorNavigation, Link } from "@wfp/ui";

<AnchorNavigation title="Title">
  <Link href="#">
    Item one
  </Link>
  <Link href="#">
    Item two
  </Link>
  <Link href="#">
    Item three
  </Link>
  <Link href="#">
    Item four
  </Link>
</AnchorNavigation>
`;

RegularAnchorNavigation.story = {
  parameters: {
    docs: {
      source: {
        code: anchorsourcecode,
      },
    },
  },
};
