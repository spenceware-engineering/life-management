import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4001

const swaggerDocument = YAML.load('../swagger.yaml')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req: Request, res: Response) => {
    res.send('Note service running')
})

app.listen(PORT, () => console.log(`Note service running at http://localhost:${PORT}`))
