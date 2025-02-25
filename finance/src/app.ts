import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4002

const swaggerDocument = YAML.load('../swagger.yaml')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req: Request, res: Response) => {
    res.send('Finance service running')
})

app.listen(PORT, () => console.log(`Finance service running at http://localhost:${PORT}`))
