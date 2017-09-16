const chokidar = require('chokidar');
const path = require('path');
const debounce = require('lodash.debounce');

module.exports = (dir, callback) => {
  const watcher = chokidar
    .watch(dir, {
      ignored: [
        path.join(dir, 'node_modules'),
        path.join(dir, '.esm-cache')
      ],
      ignoreInitial: true
    })
    .on('all', debounce(callback, 30));

  return () => watcher.close();
};
