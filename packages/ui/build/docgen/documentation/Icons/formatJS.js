"use strict";

/**
 * formatJS(rawJSON)
 * Formats JSON and returns JSON string
 * @param rawJSON: requires return result from getJSON()
 */
var formatJS = function formatJS(symbol) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /*const newOptions = Object.assign(
    {
      json: true,
    },
    options
  );*/
  // iconMeta - returns new JSON Array of icon Objects
  // For each "symbol.svg.symbol", create new Objects with these keys/values
  var data = {
    id: symbol.$.id,
    name: symbol.$.id,
    tags: symbol.$.id,
    styles: symbol.style ? symbol.style : '',
    viewBox: symbol.$.viewBox || '',
    width: symbol.$.viewBox.split(' ')[2] || '',
    height: symbol.$.viewBox.split(' ')[3] || '',
    svgData: {
      circles: symbol.circle ? symbol.circle.map(function (attrValue) {
        return attrValue.$;
      }) : '',
      ellipses: symbol.ellipse ? symbol.ellipse.map(function (attrValue) {
        return attrValue.$;
      }) : '',
      paths: symbol.path ? symbol.path.map(function (attrValue) {
        return attrValue.$;
      }) : '',
      polygons: symbol.polygon ? symbol.polygon.map(function (attrValue) {
        return attrValue.$;
      }) : '',
      polylines: symbol.polyline ? symbol.polyline.map(function (attrValue) {
        return attrValue.$;
      }) : '',
      rects: symbol.rect ? symbol.rect.map(function (attrValue) {
        return attrValue.$;
      }) : ''
    }
  };
  return data; //return this.options.json ? JSON.stringify(iconMeta, null, 2) : iconMeta;
};

module.exports = formatJS;