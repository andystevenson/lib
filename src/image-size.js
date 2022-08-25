import size from 'image-size'
import url from 'url'
import fs from 'node:fs'
import { Writable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import got from 'got'

class FixedLengthStream extends Writable {
  constructor(length = 2048, options = {}) {
    super(options)
    this.length = length
    this.data = []
    this.result = null
  }
  _write(chunk, encoding, next) {
    if (!this.result) this.data.push(chunk)

    if (chunk.length > this.length && !this.result) {
      const buffer = Buffer.concat(this.data)
      this.result = size(buffer)
    }
    next()
  }
}
const download = async (imgUrl) => {
  const fls = new FixedLengthStream()
  await pipeline(got.stream(imgUrl.href), fls)
  return fls.result
}

export default async (filename) => {
  const stat = url.parse(filename)

  if (stat.protocol === null) return size(filename)
  return await download(stat)
}
