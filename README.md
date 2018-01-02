# Buffer Factory - ([中文版README](./README-zh.md))
`buffer-factory` makes it no pain to create a Buffer object by encapsulate Buffer.from an new Buffer().

This module has been well unit tested and documented.

# Usage

## install

`npm i buffer-factory`

## use

```javascript
const bufferFactory = require('buffer-factory')
bufferFactory('2b', 'hex')
```

## Implementation

If `Buffer.from` is accessible, this module is preffered to use it.  

`Buffer.from` is added from v5.10.0, as the api document shows. But some node version, v4.2.6 for example, `Buffer.from` is a function, however, there is an error when you call `Buffer.from(string, encoding)`(error like `hex is not function`). So I also take the node version into account.  

For low versions of Node.js, this module use `new Buffer(...)`.  

You're free to pass in the same params as `Buffer.from(...)` and `new Buffer(...)`, I will handle the rest for you.  

You're also free to check `index.js` for the implementation code :).