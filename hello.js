// на компе уже установлен Node
// тогда положите этот файл hello.js в любую папку и наберите там команду
// node hello

const http = require('http')
const port = '5001'
const host = '127.0.0.1'

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8;' })
    res.end('Я - сервер!')
}
).listen(port, host, () => { console.log(`Сервер запущен и работает по адресу http://${host}:${port}/`) })