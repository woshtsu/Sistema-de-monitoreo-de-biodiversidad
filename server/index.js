import express from 'express'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const animalJSON = require('./src/fakeanimals.json')
import { randomInt } from 'node:crypto'
import { validateAnimal, validatePartialAnimal } from './src/validateAnimal.js'

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

// ------------------------------ POST

app.post('/animals', (req, res) => {
  const result = validateAnimal(req.body)
  console.log(result);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newAnimal = {
    id: randomInt(100),
    ...result.data
  }
  //animalJSON.push(newAnimal) //guardar newAnimal
  res.status(201).send(newAnimal)
})

//------------------------------- PATCH

app.patch('/animals/:id', (req, res, next) => {
  const { id } = req.params
  const result = validatePartialAnimal(req.body)
  if (!result.success) {
    return res.status(422).json({ error: JSON.parse(result.error.message) })
  }
  const animalIndex = animalJSON.findIndex(animal => animal.id === Number(id))

  if (animalIndex === -1) {
    return next()
  }
  const updateAnimal = {
    ...animalJSON[animalIndex],
    ...result.data
  }
  //animalJSON[animalIndex] = updateAnimal //guardar updateAnimal

  res.status(200).json(updateAnimal)
})

// ------------------------------ ERROR 404

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
