/* eslint-disable */
// @ts-nocheck

const mergeProps = (target, source) => {
  if (!source) return target;

  const result = { ...target };
  Object.keys(source).forEach((key) => {
    const targetProp = target[key];
    const sourceProp = source[key];
    if (typeof sourceProp === 'function' && targetProp) {
      result[key] = (...e) => {
        targetProp(...e);
        sourceProp(...e);
      };
    } else {
      result[key] = sourceProp;
    }
  });

  return result;
};

export { mergeProps };
