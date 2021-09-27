const axios = require('axios')
const figmaRestApi = axios.create({
  baseURL:
    process.env.FIGMA_BASE_URL,
  headers: {
    'X-Figma-Token': process.env.DEV_ACCESS_TOKEN
  }
})

module.exports = figmaRestApi
