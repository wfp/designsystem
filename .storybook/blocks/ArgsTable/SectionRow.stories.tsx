import React from 'react';
import { SectionRow } from './SectionRow';
import { TableWrapper } from './ArgsTable';
import { ResetWrapper } from '../../typography/DocumentFormatting';

export default {
  component: SectionRow,
  title: 'Docs/SectionRow',
  decorators: [
    (getStory) => (
      <ResetWrapper>
        <TableWrapper>
          <tbody>{getStory()}</tbody>
        </TableWrapper>
      </ResetWrapper>
    ),
  ],
};

const Template = (args) => <SectionRow {...args} />;

export const Section = Template.bind({});
Section.args = { level: 'section', label: 'Props' };

export const Subsection = Template.bind({});
Subsection.args = { level: 'subsection', label: 'HTMLElement' };

export const Collapsed = Template.bind({});
Collapsed.args = { ...Section.args, initialExpanded: false };

export const Nested = () => (
  <SectionRow {...Section.args}>
    <SectionRow {...Subsection.args}>
      <tr>
        <td colSpan={2}>Some content</td>
      </tr>
    </SectionRow>
  </SectionRow>
);
