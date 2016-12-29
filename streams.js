let fs=require('fs')
let readableStream = fs.createReadStream('hello-world.js')
let writeableStream = fs.createWriteStream('hello-world-copy.js')
let content=''

let counter=0;

readableStream.on('readable',function(){
  while((chunk=readableStream.read()) != null )
  content+=chunk
  counter++
})


readableStream.on('error',function(error){
  console.log('Error occurred', error)
})

readableStream.on('end',function(chunk){
  console.log('reads chunks', counter)
  //console.log(content)
})

readableStream.pipe(writeableStream)
