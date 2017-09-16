const { remote } = require('electron');
const { entry, esm } = remote.getGlobal('settings');

if (!esm) return require(entry);

const esmRequire = require('@std/esm')(module, {
  cjs: true,
  esm: 'js'
});

esmRequire(entry);
