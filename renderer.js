const { remote } = require('electron');
// Get the settings exposed by the main process (see main.js).
const { entry, esm } = remote.getGlobal('settings');

// Get enhanced require.
const getRequire = esm => {
  // No enhancements are needed.
  if (!esm) return require;

  // With support for ES modules.
  return require('@std/esm')(module, {
    cjs: true,
    esm: 'js',
    sourceMap: true
  });
};

// Call the entry with the enhanced require method.
getRequire(esm)(entry);