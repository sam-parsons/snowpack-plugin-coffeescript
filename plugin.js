const path = require('path');
const fs = require('fs');
const coffee = require('coffeescript');

module.exports = function plugin(config, options) {
  return {
    name: 'snowpack-plugin-coffeescript',
    resolve: {
      input: ['.coffee'],
      output: ['.js'],
    },
    load({ filePath, fileExt }) {
      const code = fs.readFileSync(filePath);
      const options = {
        sourceMap: true,
        bare: true,
        extensions: [fileExt],
      };

      const output = coffee.compile(code.toString(), options);

      return output;
    },
  };
};
