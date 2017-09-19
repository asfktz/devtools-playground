# devtools-playground
Standalone Devtools for prototyping & debugging.

<img src="./demo.gif" />

# Features
- Standalone DevTools
- Live reloading
- Support for ES modules (import/export)
- Built on top of electron, which means that both Node.js modules & the Browser's APIs are available

# Install
```
npm i -g devtools-playground
```

# Usage

Run: 
```
devtools ./file.js
```
It'll open Devtools and reload automatically on every file change.

### ES Modules
By default, it uses commonJS modules.
But you can enable support for ES module too:

```
devtools ./file.js --esm
```

It uses `@std/esm` under the hood

---

Inspired by [Jam3/devtool](https://github.com/Jam3/devtool)
