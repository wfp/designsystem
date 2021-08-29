const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const outputFile = '.env';

const isValidURL = (url) => {
  try {
    new URL(url)
  } catch (_) {
    return false
  }
  return true
};

const question =
  'Please enter your Figma project URL (e.g. https://www.figma.com/file/abcASewbASmnas/Test?node-id=1%3123): ';

rl.question(`${question}`, (input) => {
  console.log(`Your Figma project URL is: ${input}`)

  if (isValidURL(input)) {
    const url = new URL(input)
    const pathname = url.pathname
    const node = url.search

    const projectID = pathname.split('/')[2]
    const nodeID = decodeURIComponent(node.replace('?node-id=', ''))

    if (typeof projectID !== 'undefined' && typeof nodeID !== 'undefined') {
      const data = [
        'FIGMA_BASE_URL=https://api.figma.com/v1/',
        `FIGMA_PROJECT_ID=${projectID}`,
        `FIGMA_PROJECT_NODE_ID=${nodeID}`,
        'DEV_ACCESS_TOKEN=',
        'FILTER_PRIVATE_COMPONENTS=false'
      ]

      let file = fs.createWriteStream(outputFile)
      file.on('error', function (err) {
        console.log(err)
      })
      data.forEach((value) => file.write(`${value}\r\n`))
      file.end()
      console.log('Your .env file has been created!')
      console.log('Remember to add your DEV_ACCESS_TOKEN')
    } else {
      console.log('Unable to get either project ID or node ID')
    }
    rl.close()
  }
})
