import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { animalsRouter } from './routes/animals.js'
const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Bienvenido a la API REST de animales')
})
app.use('/animals', animalsRouter)


const desiredPort = process.env.PORT ?? 2812
app.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})