import express from 'express'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const animalJSON = require('./src/fakeanimals.json')


const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('PAGINA PRINCIPAL')
})


app.get('/animals', (req, res) => {
  const { family, weight_kg } = req.query
  if (family && weight_kg) {
    const animal = animalJSON.filter(
      animal =>
        animal.family.toLocaleLowerCase() === family.toLocaleLowerCase() &&
        animal.weight_kg >= weight_kg)
    return res.json(animal)
  }
  res.json(animalJSON)
})

app.get('/animals/:id', (req, res, next) => {
  const { id } = req.params
  const data = animalJSON.find(animal => animal.id === Number(id)) //No olvidar que params retorna string
  if (!data) return next()
  res.json(data)
})

app.post('/create', (req, res) => {
  res.send(req.body)
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

const PORT = process.env.PORT ?? 1234
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`)
})
