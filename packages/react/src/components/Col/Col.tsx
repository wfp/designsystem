import React from 'react';
import classnames from 'classnames';
import settings from '../../globals/js/settings';

const { prefix } = settings;

interface ColProps {
  children?: React.ReactNode;
  span?: number;
  className?: string;
  innerStyle?: {};
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}

const Col: React.FC<ColProps> = React.forwardRef(
  (
    { children, span, className, innerStyle, lg, md, sm, xs, ...other },
    ref
  ) => {
    const wrapperClasses = classnames(`${prefix}--grid-col`, {
      [`${prefix}--col--span-${span}`]: span,
      [`${prefix}--col--lg--${lg}`]: lg,
      [`${prefix}--col--lg--${md}`]: md,
      [`${prefix}--col--sm--${sm}`]: sm,
      [`${prefix}--col--xs--${xs}`]: xs,
      [`${className}`]: className,
    });

    const innerClasses = classnames(`${prefix}--container-style`);
    return (
      <div ref={ref} className={wrapperClasses} {...other}>
        <div className={innerClasses} style={innerStyle}>
          {children}
        </div>
      </div>
    );
  }
);

// function columnVariation(props, propName, componentName) {
//   componentName = componentName || 'ANONYMOUS';

//   if (props[propName]) {
//     let value = props[propName];
//     if (typeof value === 'number') {
//       return value >= 1 && value <= 12
//         ? null
//         : new Error(
//             propName + ' in ' + componentName + ' is not within 1 to 10'
//           );
//     }
//   }

//   // assume all ok
//   return null;
// }

// Col.propTypes = {
//   children: PropTypes.node,

//   /** span set how wide each col block when placed next to each other fill 12 columns layout in a row eg: `span={3}`  */
//   span: PropTypes.number,

//   /** innerStyle represents style prop wrapping the inner container */
//   innerStyle: PropTypes.object,

//   /** Responsiveness on large(1200) screen will have 12 columns and calcuations will be based on this. range 1-12 */
//   lg: columnVariation,

//   /** Responsiveness on medium(992) screen will have 12 columns and calcuations will be based on this. range 1-12 */
//   md: columnVariation,

//   /** Responsiveness on small(768) screen will have 8 columns and calcuations will be based on this */
//   sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),

//   /** Responsiveness on extra small(500) screen will have 4 columns and calcuations will be based on this */
//   xs: PropTypes.oneOf([1, 2, 3, 4]),
// };

export default Col;
