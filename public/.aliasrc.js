const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

// our module aliases
module.exports = {
  '@decorators': resolve('../src/decorators/'),
  '@models': resolve('../src/models/'),
}
