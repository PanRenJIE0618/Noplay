const fs = require('fs')
const path = require('path')

const cors = require('cors')
const express = require('express')
const app = express();
app.use(cors())


app.get('/getJson', function (request, response) {
    let dir = path.join(__dirname, 'index.json')
    var books = {
        "status": 200,
        "msg": "数据获取成功",
        "data": []
    }
    fs.readFile(dir, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data);
        //2.将字符串数据转变成数组格式
        let arr = JSON.parse(data)
        books.data = arr
        response.send(books)
    })
    //response.send是express框架提供的方法，相当于结束本次请求。
})

var server = app.listen(3000,function() {
    console.log('服务器启动了');
})

