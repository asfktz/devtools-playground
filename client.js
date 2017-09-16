const { join } = require('path');
const pkgDir = require('pkg-dir');

const resolveEntry = (dir, entry) => {
  console.log(1, entry);
  if (entry) {
    return join(dir, entry);
  }
console.log(2);
  const pkg = require(join(dir, './package.json'));
  return join(dir, pkg.main);
};

function create (options) {
  const dir = pkgDir.sync();
  const entry = resolveEntry(dir, options.entry);

  console.log('--', entry);
  return { dir, entry };
}

module.exports = { create };

