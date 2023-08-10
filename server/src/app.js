let express = require('express')
const app = express()

app.get('/status',function(req,res){
    res.send('Hello nodejs server nattawut sudcharid ')
})

app.get('/hello/:person',function(req,res){
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' +req.params.person)
})

app.get('user/:userId',function(req,res){
    res.send('ดูข้อมูลผู้ใช้')
})

app.get('/users', function(req,res){
    res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
})

let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})
