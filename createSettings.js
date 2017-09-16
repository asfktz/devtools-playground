const { join } = require('path');
const pkgDir = require('pkg-dir');
const minimist = require('minimist');
const get = require('lodash/get');
const first = require('lodash/first');

const parseArgs = processArgs => {
  const args = minimist(processArgs.slice(2));

  return {
    entry: first(args._),
    esm: !!args.esm
  };
};

const resolveEntry = (dir, entry) => {
  if (entry) return entry; 

  // If no entry specified, take the main entry from package.json
  // if there's no package.json,either, take './index.js'
  try {
    const pkg = require(join(dir, './package.json'));
    return get(pkg, 'main');
  } catch (err) {
    return './index.js';
  }
};

module.exports = function(processArgs) {
  const args = parseArgs(processArgs);
  const dir = pkgDir.sync() || process.cwd();
  const entry = join(dir, resolveEntry(dir, args.entry));
  const { esm } = args;

  return { entry, dir, esm };
};
