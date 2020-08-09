const { alias, configPaths } = require('react-app-rewire-alias')
//import { alias, configPaths } from 'react-app-rewire-alias';

module.exports = function override(config) {
  alias({
    ...conconfigPaths("./tsconfig.paths.json")
  })(config)

  return config
}

