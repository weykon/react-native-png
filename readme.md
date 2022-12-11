# Introduce

this package is simply a integration for react native of web browser code using. not more creation promgram.

thanks all contributor from `pngjs` and `zlib` !

# Background

I past a lots time on looking some calculate process parsing png file.  
As lower level control png data, to output the IDAT from png chunk data.  
For my stuff, as start as png, creating new image data convert using printing image at termal printer.

# Usage

on github repository has a example in [test](https://github.com/weykon/react-native-png) folder. 

```ts
import { PNG } from 'react-native-png';
const png0 = PNG.sync.read(buffer_from_other,);
```

# TODO 
* [ ] for all API to contact PNG class and write function.
# Problem

if you crash at buffer issue, suggest to use this package in react native.

```
add @craftzdog/react-native-buffer
import { Buffer } from "@craftzdog/react-native-buffer"
```

### welcome to create issue for any problem! [create issue](https://github.com/weykon/react-native-png/issues)

# LICENSE

## `pngjs` for browser

<u><a href="https://github.com/lukeapage/pngjs">pngjs github repo</a></u>

> MIT License

## `zlib` for browser / react native

   base code

> @author `Feross Aboukhadijeh` <feross@feross.org> <http://feross.org>  
@license  MIT

### react-zlib-js

> https://www.npmjs.com/package/react-zlib-js?activeTab=readme

---

 welcome to create issue for any problem! [create issue](https://github.com/weykon/react-native-png/issues)