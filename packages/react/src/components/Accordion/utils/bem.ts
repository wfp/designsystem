import { ClassNameProp, Modifiers } from './constants';

/**
 * Generate className following BEM methodology: http://getbem.com/naming/
 * Modifier value can be one of the types: boolean, string
 */
const bem =
  (block: string, element?: string, modifiers?: Modifiers) =>
  <P>(className?: ClassNameProp<P>, props?: P) => {
    const blockElement = element ? `${block}__${element}` : block;

    let classString = blockElement;
    modifiers &&
      Object.keys(modifiers).forEach((name) => {
        const value = modifiers[name];
        if (value) classString += ` ${blockElement}--${value === true ? name : `${name}-${value}`}`;
      });

    let expandedClassName = typeof className === 'function' ? className(props!) : className;
    if (typeof expandedClassName === 'string') {
      expandedClassName = expandedClassName.trim();
      if (expandedClassName) classString += ` ${expandedClassName}`;
    }

    return classString;
  };

export { bem };
