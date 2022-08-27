import { Router } from 'express'
const routes = Router()

routes.get('/', async (_req, res) => {
  res.send('Welcome to the app for testing Node.js features')
})

export default routes
