import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
export const animalsJSON = require('../src/fakeanimals.json')