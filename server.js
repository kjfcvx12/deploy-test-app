const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end('<h1>배포 성공</h1><p>Deploy Wizard 테스트 앱입니다.</p>')
})

server.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`))
