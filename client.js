const path = require('path');
const pkgDir = require('pkg-dir');
const dir = pkgDir.sync();
const pkgPath = path.join(dir, './package.json');
const pkg = require(pkgPath);

module.exports = {
  entry: path.join(dir, pkg.main),
  dir: dir
};