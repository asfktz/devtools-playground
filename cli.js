#! /usr/bin/env node

const electron = require('electron');
const proc = require('child_process');

// spawn Electron
const entry = process.argv[2] || '';
proc.spawn(electron, [__dirname, entry], { stdio: 'inherit' });