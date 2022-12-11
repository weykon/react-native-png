import { PNG } from '../src/png';


// load file from fs read. 
import * as fs from 'fs';
const buffer_from_fs = fs.readFileSync('./test/1.png');
const png = PNG.sync.read(buffer_from_fs,);
console.log('png ', png)
// mostly, there less using fs at react native, so we read info buffer.
// like below.

// load data from other read into buffer
// some base64 or binary read as buffer
const buffer_from_other = Buffer.from('');  // assume got a buffer
const png0 = PNG.sync.read(buffer_from_other,);
console.log('png ', png)
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


// more info
// and it's same as https://www.npmjs.com/package/pngjs api