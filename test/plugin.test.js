const plugin = require('../plugin');
const path = require('path');
const fs = require('fs');

describe('snowpack run script plugin', () => {
  test('invokes plugin and returns correctly shaped object without error', () => {
    const obj = plugin();
    expect(obj.name).toEqual('snowpack-plugin-coffeescript');
  });

  test('transforms coffeescript code into plain javascript', () => {
    const obj = plugin();
    const before = obj.load({
      filePath: path.join(__dirname, './fixtures/basic/before.coffee'),
      fileExt: '.coffee',
    }).js;
    const after = fs
      .readFileSync(path.join(__dirname, './fixtures/basic/after.js'))
      .toString();
    expect(before).toEqual(after);
  });
});
