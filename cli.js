#! /usr/bin/env node

const electron = require('electron');
const proc = require('child_process');

// spawn Electron
proc.spawn(electron, [__dirname, ...process.argv.slice(2)], {
  // stdio: 'inherit'
});
