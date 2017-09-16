#! /usr/bin/env node

const electron = require('electron');
const proc = require('child_process');

// spawn Electron
const child = proc.spawn(electron, [__dirname]);