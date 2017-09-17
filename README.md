Independent Devtools for prototyping & debugging.

Built on top of electron.

# Features
- Independent DevTools
- Live reloading
- Support for ES modules (import / export)


# Install
```
npm i -g hack-cli
```

# Usage

run: 
```
hack ./file.js
```
To open an independent devtools window.
It will reload automatically when you make a change.

### ES Modules
By default, you can use commonJS style modules
But you can also enable support for ES module too:

```
hack ./file.js --esm
```

It uses `@std/esm` under the hood

---

Inspired by [Jam3/devtool](https://github.com/Jam3/devtool)
