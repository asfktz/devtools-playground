const { join } = require('path');
const pkgDir = require('pkg-dir');
const minimist = require('minimist');

const first = arr => arr[0];

const parseArgs = processArgs => {
  const args = minimist(processArgs.slice(2));

  return {
    entry: first(args._),
    esm: !!args.esm
  };
};

const resolveEntry = (dir, entry) => {
  if (entry) {
    return join(dir, entry);
  }

  const pkg = require(join(dir, './package.json'));
  return join(dir, pkg.main);
};

module.exports = function(processArgs) {
  const args = parseArgs(processArgs);
  const dir = pkgDir.sync();
  const entry = resolveEntry(dir, args.entry);
  const { esm } = args;
  
  return { entry, dir, esm };
};
