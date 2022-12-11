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

# LICENSE

## `pngjs` for browser

<u><a href="https://github.com/lukeapage/pngjs">pngjs github repo</a></u>

### License

```
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## `zlib` for browser / react native

@author `Feross Aboukhadijeh` <feross@feross.org> <http://feross.org>  
@license  MIT
