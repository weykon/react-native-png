import { Stream } from "zlib"

export declare class PNG extends Stream {
    static sync: {
        read: (buffer: Buffer, options?: Options) => PNG
        write: (png, options) => Buffer
    }
    width: number;
    height: number;
    data: Buffer;
    depth: number;
    interlace: boolean;
    palette: boolean;
    color: boolean;
    alpha: boolean;
    bpp: number;
    colorType: number;
    gamma: number;
}

type Options = {
    width?: number,
    height?: number
    gamma?: number
} 
