const electron = require('electron');
// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const watch = require('./watch');

const createSettings = require('./createSettings');

const settings = createSettings(process.argv);

// expose settings to renderer process 
global.settings = settings;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const quit = app.quit.bind(app);

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 0, height: 0 });

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  // kill the process when devtools is closed
  mainWindow.webContents.on('devtools-closed', quit);

  // live-reload devtools
  // watch for changes in the user's project
  const unwatch = watch(settings.dir, () => {
    mainWindow.reload();
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    unwatch();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', quit);

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
