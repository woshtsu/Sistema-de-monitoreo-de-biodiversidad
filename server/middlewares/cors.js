import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'htpp://localhost:2812',
  'htpp://localhost:1234'
]

export const corsMiddleware = ({ input = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (input.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error('not allowed by CORS'))
  }
})