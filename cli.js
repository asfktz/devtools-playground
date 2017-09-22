#! /usr/bin/env node

const electron = require('electron');
const proc = require('child_process');
const version = require('./version');

const args = process.argv.slice(2);
const { log } = console;

if (['--version', '-v'].includes(args[0])) {
  return log(version);
}

// spawn Electron
proc.spawn(electron, [__dirname, ...args], {
  // stdio: 'inherit'
});
