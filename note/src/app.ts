import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4001

app.get('/', (req: Request, res: Response) => {
    res.send('Note service running')
})

app.listen(PORT, () => console.log(`Note service running at http://localhost:${PORT}`))
