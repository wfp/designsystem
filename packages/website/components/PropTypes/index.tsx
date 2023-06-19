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

/*
const clean = (obj) => {
  for (const propName in obj) obj[propName] ?? delete obj[propName];
  return obj;
};*/

export default function PropTypes({
  defaultProps = {},
  mainComponent,
  children,
  components = [],
  sampleCode: sampleCodeInput,
  smallPreview,
  previewScale,
  propTypes,
}: any) {
  const [showAllProps, setShowAllProps] = useState(true);

  const { register, watch, handleSubmit } = useForm({
    defaultValues: defaultProps,
  });

  const sampleCode =
    children?.props?.children?.props?.children || sampleCodeInput;

  //if (!propTypes?.[0]) return null;
  const propList = propTypes?.[0]?.props;

  /*Object.entries(propList).forEach((prop) => {
    componentProps[prop.name] =
      propValues[prop.name] || prop.defaultValue?.value;
  });*/

  const propValues = watch();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = 'primary | secondary | dsaasdads | saddsa'.replaceAll(
    ' ',
    ''
  );

  const renderInput = (prop) => {
    if (prop.type.name === 'ButtonKind') {
      return (
        <Select
          {...register(prop.name, { required: prop.required })}
          defaultValue={prop.defaultValue && prop.defaultValue.value}>
          {Object.values(options.split('|')).map((kind, i) => (
            <SelectItem key={i} value={kind} text={kind} />
          ))}
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
  if (propList) {
    Object.values(propList).forEach(({ name, defaultValue }: any) => {
      componentProps[name] = propValues[name] || defaultValue?.value;
    });
  }

  const MyComponent = unComponents[mainComponent];
  if (!MyComponent) return null;

  let propsAsList: any = [];
  if (propList) {
    propsAsList = showAllProps
      ? Object.values(propList).filter((e: any) =>
          e.description.includes('@design')
        )
      : Object.values(propList);
  }

  let code = reactElementToJSXString(
    <MyComponent {...defaultProps} {...componentProps} />,
    { filterProps: (val) => (val === undefined ? false : true) }
  );

  if (sampleCode) {
    const codeFiltered = reactElementToJSXString(
      <MyComponent
        // {...defaultProps}
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
  const componentList = [mainComponent, ...components].join(', ');
  code = `import { ${componentList} } from "@un/react";

${code}`;

  if (smallPreview) {
    return (
      <div
        className={styles.smallPreviewWrapper}
        style={{
          width: `${(1 / previewScale) * 100}%`,
          left: `-${(1 / previewScale) * 50 - 50}%`,
          transform: ` scale(${previewScale})`,
        }}>
        <CodeBlockLive
          source={code}
          live
          hideWrapper
          center
          smallPreview
          showEditor={!showAllProps}
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles.preview} ${
        smallPreview ? styles.smallPreview : styles.normalPreview
      }`}>
      <CodeBlockLive
        source={code}
        live
        hideWrapper
        center
        smallPreview={smallPreview}
        showEditor={!showAllProps}
      />
      {/*
        <div className={styles.previewWrapper}>
          <MyComponent {...defaultProps} {...componentProps} />
        </div>
  )}*/}
      {!smallPreview && (
        <Button
          kind="ghost"
          className={styles.showAllPropsButton}
          onClick={() => setShowAllProps(!showAllProps)}>
          {showAllProps ? 'Show' : 'Hide'} all props
        </Button>
      )}
      {!smallPreview && (
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
              {propsAsList.map((prop: any) => (
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
      )}
    </div>
  );
}
