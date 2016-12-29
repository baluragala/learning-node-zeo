//1.open the file
//2.read the file
//3.print the contents
const fs = require('fs')

console.log("1. I will read file now")
let content
content = fs.readFile('hello-world.js',function(err,data){
  if(err){
    console.log(err)
    return
  }
  console.log("2. File contents",data)
})
console.log("3. I read file now")
