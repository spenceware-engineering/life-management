import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4004

const swaggerDocument = YAML.load('../swagger.yaml')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req: Request, res: Response) => {
  res.send('Record service running')
})

app.listen(PORT, () => console.log(`Record service running at http://localhost:${PORT}`))
