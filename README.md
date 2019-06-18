# uint64le

Encode / decode little endian unsigned 64 bit integers

```
npm install uint64le
```

## Usage

``` js
const uint64le = require('uint64le')

const buf = uint64le.encode(42) // returns a 8 byte buffer with 42 encoded
console.log(uint64le.decode(buf)) // returns 42
```

## Notice

Javascript (currently) only supports integers up to `2^53 - 1` without any
loss of precision so beware of this if you encode / decode any integers larger than that.

## API

#### `buffer = uint64le.encode(num, [buffer], [offset])`

Encode a number as a little endian 64 bit unsigned integer.
Optionally you can pass a buffer + offset as the 2nd and 3rd argument
and the number will be encoded into that buffer at the given offset.

#### `num = uint64le.decode(buffer, [offset])`

Decode a number from a buffer.

#### `length = uint64le.encodingLength(num)`

Always returns `8`. Added to comply with the standard encoding interface in node.
Similarly `uint64le.encode.bytes` and `uint64le.decode.bytes` is also set to `8`.

## License

MIT
