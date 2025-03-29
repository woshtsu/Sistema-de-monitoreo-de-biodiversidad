import http from 'node:http'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const animalsJSON = require('./src/fakeanimals.json')

const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  const { method, url } = req

  if (url === '/') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    return res.end(JSON.stringify(animalsJSON))
  }
  if (method === 'GET' && url === '/search') {
    let animal
    try {
      animal = animalsJSON.find(animal => animal.id === 322)
      if (!animal) {
        throw new Error('salta al error')
      }
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end('<h1>No se encontro</h1>')
    }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(animal))
  }
  if (method === 'POST') {
    if (url === '/create') {
      let body = ''
      req.on('data', chunk => {
        body += chunk.toString()
      })
      req.on('end', () => {
        const data = JSON.parse(body)
        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify(data))
      })
    }
  }
}

const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`server listening on http://localhost:${desirePort}`)
})