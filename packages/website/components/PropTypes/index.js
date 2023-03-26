import {
  Button,
  Checkbox,
  Select,
  SelectItem,
  Table,
  Text,
  TextInput,
} from '@un/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as unComponents from '@un/react';

import reactElementToJSXString from 'react-element-to-jsx-string';

import styles from './prop-types.module.scss';
import CodeBlockLive from '../Blog/Mdx/CodeBlockLive';

const clean = (obj) => {
  for (let propName in obj) obj[propName] ?? delete obj[propName];
  return obj;
};

export default function PropTypes({
  defaultProps,
  mainComponent,
  sampleCode,
  propTypes,
}) {
  const propList = propTypes[0].props;

  /*Object.entries(propList).forEach((prop) => {
    componentProps[prop.name] =
      propValues[prop.name] || prop.defaultValue?.value;
  });*/

  const [showAllProps, setShowAllProps] = useState(true);

  const { register, watch, handleSubmit } = useForm({
    defaultValues: defaultProps,
  });
  const propValues = watch();

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderInput = (prop) => {
    if (prop.type.name === 'ButtonKind') {
      return (
        <Select
          {...register(prop.name, { required: prop.required })}
          defaultValue={prop.defaultValue && prop.defaultValue.value}>
          {/*Object.values(ButtonKind).map((kind) => (
            <SelectItem value={kind} key={kind}>
              hello
            </SelectItem>
          ))*/}
        </Select>
      );
    }
    if (
      prop.type.name === 'ReactNode' ||
      prop.type.name === 'string' ||
      prop.type.name === 'number'
    ) {
      return (
        <TextInput
          {...register(prop.name, { required: prop.required })}
          type={prop.type.name === 'number' ? 'number' : 'text'}
          defaultValue={prop.defaultValue && prop.defaultValue.value}
        />
      );
    } else if (prop.type.name === 'boolean') {
      return (
        <Checkbox
          {...register(prop.name)}
          labelText={prop.name}
          type="checkbox"
          defaultChecked={prop.defaultValue && prop.defaultValue.value}
        />
      );
    }
    // Add more input types based on prop types if needed
  };

  const componentProps = {};
  Object.values(propList).forEach((prop) => {
    componentProps[prop.name] =
      propValues[prop.name] || prop.defaultValue?.value;
  });

  const MyComponent = unComponents[mainComponent];

  const propsAsList = showAllProps
    ? Object.values(propList).filter((e) => e.description.includes('@design'))
    : Object.values(propList);

  const content = <MyComponent {...defaultProps} {...clean(componentProps)} />;
  console.log('content', content);

  var code = reactElementToJSXString(
    <MyComponent {...defaultProps} {...componentProps} />,
    { filterProps: (val) => (val === undefined ? false : true) }
  );

  if (sampleCode) {
    const codeFiltered = reactElementToJSXString(
      <MyComponent
        {...defaultProps}
        {...componentProps}
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
      />,
      { filterProps: (val) => (val === undefined ? false : true) }
    )
      .replace(`<${mainComponent}`, ``)
      .replace(`/>`, ``);

    code = sampleCode.replace('PROPS_HERE', codeFiltered);
  }
  const componentList = [mainComponent].join(', ');
  code = `import { ${componentList} } from "@un/react";

${code}`;

  return (
    <div className={styles.preview}>
      <CodeBlockLive
        source={code}
        live
        hideWrapper
        showEditor={!showAllProps}
      />
      {/*
        <div className={styles.previewWrapper}>
          <MyComponent {...defaultProps} {...componentProps} />
        </div>
  )}*/}
      <Button
        className={styles.showAllPropsButton}
        onClick={() => setShowAllProps(!showAllProps)}>
        {showAllProps ? 'Show' : 'Hide'} all props
      </Button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Table className={styles.propTable}>
          {!showAllProps && (
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
                <th>Value</th>
              </tr>
            </thead>
          )}
          <tbody>
            {propsAsList.map((prop) => (
              <tr key={prop.name}>
                {!showAllProps && <td>{prop.name}</td>}
                {!showAllProps && (
                  <td>
                    <Text kind="code">{prop.type.name}</Text>
                  </td>
                )}
                {!showAllProps && (
                  <td>{prop.defaultValue && prop.defaultValue.value}</td>
                )}
                <td>
                  {showAllProps && (
                    <h3 className={styles.propTitle}>{prop.name}</h3>
                  )}
                  {prop.description.replace('@design', '')}

                  {prop.defaultValue && (
                    <div>default: {prop.defaultValue.value}</div>
                  )}
                </td>
                <td>{renderInput(prop)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  );
}
