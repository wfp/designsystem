/**
 * formatJS(rawJSON)
 * Formats JSON and returns JSON string
 * @param rawJSON: requires return result from getJSON()
 */

const formatJS = (symbol, options = {}) => {
  /*const newOptions = Object.assign(
    {
      json: true,
    },
    options
  );*/

  // iconMeta - returns new JSON Array of icon Objects
  // For each "symbol.svg.symbol", create new Objects with these keys/values
  const data = {
    id: symbol.$.id,
    name: symbol.$.id,
    tags: symbol.$.id,
    styles: symbol.style ? symbol.style : '',
    viewBox: symbol.$.viewBox || '',
    width: symbol.$.viewBox.split(' ')[2] || '',
    height: symbol.$.viewBox.split(' ')[3] || '',
    svgData: {
      circles: symbol.circle
        ? symbol.circle.map((attrValue) => attrValue.$)
        : '',
      ellipses: symbol.ellipse
        ? symbol.ellipse.map((attrValue) => attrValue.$)
        : '',
      paths: symbol.path ? symbol.path.map((attrValue) => attrValue.$) : '',
      polygons: symbol.polygon
        ? symbol.polygon.map((attrValue) => attrValue.$)
        : '',
      polylines: symbol.polyline
        ? symbol.polyline.map((attrValue) => attrValue.$)
        : '',
      rects: symbol.rect ? symbol.rect.map((attrValue) => attrValue.$) : '',
    },
  };

  return data;

  //return this.options.json ? JSON.stringify(iconMeta, null, 2) : iconMeta;
};

module.exports = formatJS;
