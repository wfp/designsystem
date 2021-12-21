require('dotenv').config();
const axios = require('axios');
const figmaRestApi = require('./util/figmaRestApi');
const Utils = require('./util/utils');
const colorsExporter = require('./util/colorsExporter');
const svgExporter = require('./util/svgExporter');

const rateLimit = 20;
const waitTimeInSeconds = 45;
const fs = require('fs');

const getProjectNode = async ({ figmaProjectId, figmaProjectNodeId }) => {
  return await figmaRestApi.get(
    'files/' + figmaProjectId + '/nodes?ids=' + figmaProjectNodeId
  );
};

const getSVGURL = async (id) => {
  return await figmaRestApi.get(
    'images/' + process.env.FIGMA_PROJECT_ID + '/?ids=' + id + '&format=svg'
  );
};

module.exports = {
  svgExporter,
  colorsExporter,
};
