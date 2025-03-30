import express from 'express'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const app = express()

const PORT = process.env.PORT ?? 1234


app.get('/', (req, res) => {
  res.status(200).send('<h1>Pagina Principalñ</h1>')
})

app.use(async (req, res) => {
  const filePath = join(process.cwd(), 'public', 'images', '404-error.svg')
  try {
    const content = await readFile(filePath, 'utf-8')
    res.status(404).send(content)
  } catch (error) {
    console.error('Error al leer el svg', error)
    res.status(500).send('Error interno del servidor')
  }
})

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`)
})
