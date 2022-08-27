import { Router } from 'express'
const routes = Router()

routes.get('/api', async (_req, res) => {
  console.log('test route')
})

export default routes
