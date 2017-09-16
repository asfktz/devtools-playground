// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const client = require('./client');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const path = require('path');

chokidar
  .watch(client.dir, {
    ignored: path.join(client.dir, 'node_modules'),
    ignoreInitial: true
  })
  .on(
    'all',
    debounce((event, path) => {
      // console.log(event, path);
      window.location.reload();
    }, 30)
  );

require(client.entry);
