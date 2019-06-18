const UINT_32_MAX = Math.pow(2, 32)

exports.encodingLength = function () {
  return 8
}

exports.encode = function (num, buf, offset) {
  if (!buf) buf = Buffer.alloc(8)
  if (!offset) offset = 0

  const top = Math.floor(num / UINT_32_MAX)
  const rem = num - top * UINT_32_MAX

  buf.writeUInt32LE(rem, offset)
  buf.writeUInt32LE(top, offset + 4)
  return buf
}

exports.decode = function (buf, offset) {
  if (!offset) offset = 0

  const rem = buf.readUInt32LE(offset)
  const top = buf.readUInt32LE(offset + 4)

  return top * UINT_32_MAX + rem
}

exports.encode.bytes = 8
exports.decode.bytes = 8
