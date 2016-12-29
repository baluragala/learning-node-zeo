const events=require('events')
let em2=new events.EventEmitter();
//console.log(1,em2)

function onlyOnce(payload){
  console.log('hello5',payload)
  console.log(em2.listeners('Hello'))
  em2.removeListener('Hello',onlyOnce)
}

em2.on('Hello',onlyOnce)
em2.on('Hello',function(payload){
  console.log('hello1',payload)
  console.log(em2.listeners('Hello'))
})
em2.on('Hello',function(payload){
  console.log('hello2',payload)
})
em2.on('Hello',function(payload){
  console.log('hello3',payload)
})
em2.on('Hello',function(payload){
  console.log('hello4',payload)
})


em2.emit('Hello',"Zeo1")
em2.emit('Hello',"Zeo2")
em2.emit('Hello',"Zeo3")
//console.log(2,em2)
