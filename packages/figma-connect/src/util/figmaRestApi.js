const axios = require('axios');
const figmaRestApi = axios.create({
  baseURL: process.env.FIGMA_BASE_URL
    ? process.env.FIGMA_BASE_URL
    : 'https://api.figma.com/v1/',
  headers: {
    'X-Figma-Token': process.env.DEV_ACCESS_TOKEN,
  },
});

module.exports = figmaRestApi;
