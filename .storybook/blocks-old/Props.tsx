import React, { FunctionComponent, useContext } from 'react';

import {
  PropsTable,
  PropsTableError,
  PropsTableProps,
  PropsTableRowsProps,
  PropsTableSectionsProps,
  PropDef,
  TabsState,
} from '@storybook/components';
import {
  DocsContext,
  DocsContextProps,
} from '@storybook/addon-docs/dist/blocks/DocsContext';
import { Component, CURRENT_SELECTION } from './types';
import { getComponentName } from './utils';

import { PropsExtractor } from '@storybook/addon-docs/dist/lib/docgen/types';
import { extractProps as reactExtractProps } from '../frameworks/react/extractProps';
import { extractProps as vueExtractProps } from '../frameworks/vue/extractProps';

interface PropsProps {
  exclude?: string[];
  of?: '.' | Component;
  components?: {
    [label: string]: Component;
  };
}

// FIXME: remove in SB6.0 & require config
const inferPropsExtractor = (framework: string): PropsExtractor | null => {
  switch (framework) {
    case 'react':
      return reactExtractProps;
    case 'vue':
      return vueExtractProps;
    default:
      return null;
  }
};

const filterRows = (rows: PropDef[], exclude: string[]) =>
  rows && rows.filter((row: PropDef) => !exclude.includes(row.name));

export const getComponentProps = (
  component: Component,
  { exclude }: PropsProps,
  { parameters }: DocsContextProps
): PropsTableProps => {
  if (!component) {
    return null;
  }
  try {
    const params = parameters || {};
    const { framework = null } = params;

    const {
      extractProps = inferPropsExtractor(framework),
    }: { extractProps: PropsExtractor } = params.docs || {};
    if (!extractProps) {
      throw new Error(PropsTableError.PROPS_UNSUPPORTED);
    }
    let props = extractProps(component);
    if (exclude != null) {
      const { rows } = props as PropsTableRowsProps;
      const { sections } = props as PropsTableSectionsProps;
      if (rows) {
        props = { rows: filterRows(rows, exclude) };
      } else if (sections) {
        Object.keys(sections).forEach((section) => {
          sections[section] = filterRows(sections[section], exclude);
        });
      }
    }

    return props;
  } catch (err) {
    return { error: err.message };
  }
};

export const getComponent = (
  props: PropsProps = {},
  context: DocsContextProps
): Component => {
  const { of } = props;
  const { parameters = {} } = context;
  const { component } = parameters;

  const target = of === CURRENT_SELECTION ? component : of;
  if (!target) {
    if (of === CURRENT_SELECTION) {
      return null;
    }
    throw new Error(PropsTableError.NO_COMPONENT);
  }
  return target;
};

const PropsContainer: FunctionComponent<PropsProps> = (props) => {
  const context = useContext(DocsContext);
  const { components } = props;
  const {
    parameters: { subcomponents },
  } = context;

  let allComponents = components;
  if (!allComponents) {
    const main = getComponent(props, context);
    const mainLabel = getComponentName(main);
    const mainProps = getComponentProps(main, props, context);

    if (!subcomponents || typeof subcomponents !== 'object') {
      return mainProps && <PropsTable {...mainProps} />;
    }

    allComponents = { [mainLabel]: main, ...subcomponents };
  }

  const tabs: { label: string; table: PropsTableProps }[] = [];
  Object.entries(allComponents).forEach(([label, component]) => {
    tabs.push({
      label,
      table: getComponentProps(component, props, context),
    });
  });

  return (
    <TabsState>
      {tabs.map(({ label, table }) => {
        if (!table) {
          return null;
        }
        const id = `prop_table_div_${label}`;
        return (
          <div key={id} id={id} title={label}>
            {({ active }: { active: boolean }) =>
              active ? (
                <PropsTable key={`prop_table_${label}`} {...table} />
              ) : null
            }
          </div>
        );
      })}
    </TabsState>
  );
};

PropsContainer.defaultProps = {
  of: '.',
};

export { PropsContainer as Props };
