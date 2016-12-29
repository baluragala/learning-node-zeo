const fs=require('fs')
const zlib=require('zlib')

fs.createReadStream('hello-world.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('hello-world.zip'))
