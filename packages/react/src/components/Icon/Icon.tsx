import invariant from 'invariant';
import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import { IIcon } from '../../types/utils';

/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */

export function svgShapes(svgData) {
  const svgElements = Object.keys(svgData)
    .filter((key) => svgData[key])
    .map((svgProp) => {
      const data = svgData[svgProp];

      if (svgProp === 'circles') {
        return data.map((circle, index) => {
          const circleProps = {
            cx: circle.cx,
            cy: circle.cy,
            r: circle.r,
            fill: circle.fill,
            key: `circle${index}`,
          };

          return <circle {...circleProps} />;
        });
      } else if (svgProp === 'paths') {
        return data.map((path, index) => (
          <path fill={path.fill} d={path.d} key={`key${index}`} />
        ));
      }

      return '';
    });

  return svgElements;
}

export function isPrefixed(name) {
  if (__DEV__) {
    invariant(typeof name === 'string', '[Icon] icon name is missing.');
  }
  return name && name.split('--')[0] === 'icon';
}

/** Icons are visual representations of commands, devices, directories, or common actions. */
type IconProps = PropsWithChildren<{
  className?: Argument;
  description: string;
  fill?: string;
  fillRule?: string;
  height?: string;
  icon?: IIcon | React.ReactNode;
  name?: string;
  role?: string;
  viewBox?: string;
  width?: string;
  iconRef?: () => void;
  style?: {};
}>;

const Icon: React.FC<IconProps> = ({
  className,
  description,
  fill,
  fillRule,
  height,
  icon,
  iconTitle,
  role,
  style,
  width,
  iconRef,
  ...other
}) => {
  if (React.isValidElement(icon)) {
    width = width ? width : icon.props.width;
    height = height ? height : icon.props.height;

    var clonedIcon = React.cloneElement(icon, {
      className,
      role,
      width,
      height,
      style,
      fill,
      fillRule,
      description,
    });

    return clonedIcon;
  }

  const props = {
    className,
    fill,
    fillRule,
    height: height || icon?.height,
    //name: isPrefixed ? name : `icon--${name}`,
    role,
    style,
    viewBox: icon.viewBox,
    width: width || icon.width,
    ref: iconRef,
    ...other,
  };

  const svgContent = icon ? svgShapes(icon.svgData) : '';

  return (
    <svg {...props} aria-label={description} alt={description}>
      <title>{description}</title>
      {svgContent}
    </svg>
  );
};

export default Icon;
