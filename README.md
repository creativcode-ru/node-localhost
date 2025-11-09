# Простой localalhost на Node

Самый простой сервер на Node пишется буквально в две стрчки  

```javascript
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8;' })
    res.end('Я - сервер!')
}
).listen(port, host, () => { console.log(`Сервер запущен и работает по адресу http://${host}:${port}/`) })
```  
Положите файл hello.js любую папку и запустите командой

```bash
node hello
```  
(надеюсь Node вы уже утановили)


## Передача данных JSON на другой localhost с учетом CORS

Когда мы разворачиваем свой фронтенд проект, от уже запускается на своём локалхосте, и при  `fetch` или
`axios` запросах на другой локалхост, браузер отправляет еще и предварительный CORS запрос.
Для обработки такого подзапроса, немного доработаем наш сервер:

```javascript
// это фрагмент кода

if (req.method === 'OPTIONS') {
    // Ответить на запрос OPTIONS -- предварительный CORS запрос >> важно прислать правильные заголовки
    res.setHeader('Access-Control-Allow-Origin', '*') //* только для отладки
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type') //* только для отладки
    res.end()
  }
  else {

 // весь код в файле server.js
```  
Положите файл server.js любую папку и запустите командой. 

```bash
node server
```  
Дальше можете обращаться к этому серверу из своего проекта и читать оттуда данные.

Пока всё, успехов во фронтенде!

### заказчик
Спасибо за переход по ссылкам:

*  [Путеводитель "Из точки А в точку Б❤"](https://abtur.me/)
*  [в Ютубе](https://www.youtube.com/@go.a.b)
*  [в Рутубе](https://rutube.ru/channel/28528260/)
*  [Инстаграм](https://www.instagram.com/go.a.b)
