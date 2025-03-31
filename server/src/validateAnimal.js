import z from 'zod'

const animalSchema = z.object({
  name: z.string(),
  species: z.string(),
  family: z.string(),
  habitat: z.string(),
  weight_kg: z.number().positive(),
  height_cm: z.number().positive(),
  image: z.string().url()
})

export function validateAnimal(input) {
  return animalSchema.safeParse(input)
}

export function validatePartialAnimal(input) {
  return animalSchema.partial().safeParse(input)
}