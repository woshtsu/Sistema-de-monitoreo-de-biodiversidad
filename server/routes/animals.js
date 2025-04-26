import { Router } from "express";
import { animalsModel } from "../models/mysql/animal.js";
//import { animalsModel } from "../models/animal.js";
import { validateAnimal, validatePartialAnimal } from "../src/validateAnimal.js";



export const animalsRouter = Router()

animalsRouter.get('/all', async (req, res) => {
  const animalJSON = await animalsModel.getAll()
  res.json(animalJSON)
})

animalsRouter.get('/search', async (req, res) => {
  const { name } = req.query
  if (!name) {
    return res.status(400).json({ error: 'El parámetro "nombre_comun" es requerido' });
  }

  try {
    const animal = await animalsModel.getByName({ nombre_comun: name });

    if (animal.length === 0) {
      return res.status(404).json({ message: 'No se encontraron resultados para el animal especificado' });
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

animalsRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const animal = await animalsModel.getById({ id: id })
  res.json(animal)
})



//------------------------------ POST
animalsRouter.post('/observation', async (req, res) => {
  const result = validateAnimal(req.body)
  if (result.error) {
    res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newAnimal = await animalsModel.create({ input: req.body })
  res.json(newAnimal)
})

animalsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deleteAnimal = animalsModel.delete({ input: id })

  deleteAnimal ? res.send('Se encontro y borró') : res.send('No se logro encontrar')
})

animalsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params
  const result = validatePartialAnimal(req.body)
  if (!result.success) {
    res.status(404).json({ erro: JSON.parse(result.error.message) })
  }
  const changedAnimal = await animalsModel.update({ id: id, input: result.data })
  res.json(changedAnimal)
})
