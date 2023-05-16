import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', () => {
  const user = prisma.user.findMany()
  return user
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('listening on port:3333')
  })

console.log('eu estive aqui')
