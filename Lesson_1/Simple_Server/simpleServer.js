// 1. import http
const http= require('http')

//2. create server
const server= http.createServer((reqest,respone)=>{
//3.create  default respone
respone.end('hello word')
});




//4.
const port= 3000;
server.listen(3000, ()=> {
    console.log(`server is runing on port http://localhost:${port}`)
})


