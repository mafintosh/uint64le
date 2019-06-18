const uint64le = require('./')
const tape = require('tape')

const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1

tape('encode', function (t) {
  t.same(uint64le.encodingLength(42), 8)
  t.same(uint64le.encode(Math.pow(2, 32)), Buffer.from([ 0, 0, 0, 0, 1, 0, 0, 0 ]))
  t.same(uint64le.encode(Math.pow(2, 32) + 1), Buffer.from([ 1, 0, 0, 0, 1, 0, 0, 0 ]))
  t.same(uint64le.encode(42), Buffer.from([ 42, 0, 0, 0, 0, 0, 0, 0 ]))
  t.same(uint64le.encode(42424242424242), Buffer.from([ 178, 73, 230, 169, 149, 38, 0, 0 ]))
  t.same(uint64le.encode(MAX_SAFE_INTEGER), Buffer.from([ 255, 255, 255, 255, 255, 255, 31, 0 ]))
  t.same(uint64le.encode.bytes, 8)
  t.end()
})

tape('decode', function (t) {
  t.same(uint64le.decode(Buffer.from([ 0, 0, 0, 0, 1, 0, 0, 0 ])), Math.pow(2, 32))
  t.same(uint64le.decode(Buffer.from([ 1, 0, 0, 0, 1, 0, 0, 0 ])), Math.pow(2, 32) + 1)
  t.same(uint64le.decode(Buffer.from([ 42, 0, 0, 0, 0, 0, 0, 0 ])), 42)
  t.same(uint64le.decode(Buffer.from([ 178, 73, 230, 169, 149, 38, 0, 0 ])), 42424242424242)
  t.same(uint64le.decode(Buffer.from([ 255, 255, 255, 255, 255, 255, 31, 0 ])), MAX_SAFE_INTEGER)
  t.same(uint64le.decode.bytes, 8)
  t.end()
})
