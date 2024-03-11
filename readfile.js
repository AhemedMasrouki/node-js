const fs =require('fs')
console.log(fs.readFileSync('hello.txt').toString())
fs.writeFileSync('welcome.txt','hii')