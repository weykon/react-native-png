# Analyse

```ts
// ****** DO NOT ********
// load file from fs read. 
import * as fs from 'fs';
const buffer_from_fs = fs.readFileSync('./test/1.png');
const png = PNG.sync.read(buffer_from_fs,);
console.log('png ', png)
// ⚠️"fs" module is nodejs package, it can not be run on React Native
// ⚠️so we need to use some browser code on web into RN.
// ⚠️mostly, there less using fs at react native 
//  unless you RN had prepare somelike "react-native-fs" module to read file.
// so we read info buffer.
// ****** DO NOT ********
```

```ts
// ****** DO ************ ⬇️⬇️⬇️
// like below.
// load data from other way to read into buffer
// some base64 or binary read as buffer
const buffer_from_other = Buffer.from('');  // assume got a buffer
// ------how can I get the Buffer data ? 
// ------we can get png reading from a lots ways.
// ------using Image from "react native" 
// ------or from file system
// ------or from capture screen as a png
// ------or from your creating picture as a png
// ------or from your download Stream transfer or export the Buffer
import {Image} from 'react-native';
const png = PNG.sync.read(buffer_from_other);

function App (){
    return (
        <Image /> 
        // more info please read https://reactnative.dev/docs/images
    )
}

console.log('png ', png)
```

## Think 

> how can I get the Buffer data ? 
> we can get png reading from a lots ways.
> - using Image from "react native" 
> - or from file system
> - or from capture screen as a png
> - or from your creating picture as a png
> - or from your download Stream transfer or export the Buffer

`Image` information https://reactnative.dev/docs/images  
`captureRef` https://www.npmjs.com/package/react-native-view-shot  
...  
and so on, discover by yourself!

# Result

```
// and we got :
// png  {
//     width: 5,
//     height: 5,
//     depth: 8,
//     interlace: false,
//     palette: false,
//     color: true,
//     alpha: true,
//     bpp: 4,
//     colorType: 6,
//     data: <Buffer ff ff ff 00 ff 00 00 ff ff 00 00 ff ff 00 00 ff ff ff ff 00 ff 00 00 ff ff 00 00 ff ff 00 00 ff ff 00 00 ff ff 00 00 ff ff 00 00 ff ff 00 00 ff ff 00 ... 50 more bytes>,
//     gamma: 0
//   }
```

it's same as https://www.npmjs.com/package/pngjs API
