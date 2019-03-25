const parseXMLstring = require('xml2js').parseString;

/**
 * getJSON(xml)
 * Parses XML "syncronously"
 * xml: argument that accepts only bluemix-icons.svg or sprite.svg
 */
const getJSON = xml => {
  let error = null;
  let json = null;

  parseXMLstring(xml, (innerError, innerJSON) => {
    error = innerError;
    json = innerJSON;
  });

  if (error) throw error;
  return json.svg;
};

module.exports = getJSON;
