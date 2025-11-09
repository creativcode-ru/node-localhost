
const http = require('http')
const port = '5020'
const host = '127.0.0.1'

const jsonData = {
  status: 'success',
  message: 'Привет от простого локального сервера Node.js!',
  timestamp: new Date().toISOString()
}

http.createServer((req, res) => {

  if (req.method === 'OPTIONS') {
    // Ответить на запрос OPTIONS -- предварительный CORS запрос >> важно прислать правильные заголовки
    res.setHeader('Access-Control-Allow-Origin', '*') // только для отладки
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type') // только для отладки
    res.end()
  }
  else {
        res.setHeader('Access-Control-Allow-Origin', '*')

        // Ваш код для обработки других запросов
        if (req.url === '/data') {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(jsonData))
        }
        else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset = utf-8;' })
          res.end('Not found')
        }
  }
}
).listen(port, host, () => {console.log(`Сервер запущен и работает по адресу http://${host}:${port}/`)})