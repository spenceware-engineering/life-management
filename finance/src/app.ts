import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4002

app.get('/', (req: Request, res: Response) => {
    res.send('Finance service running')
})

app.listen(PORT, () => console.log(`Finance service running at http://localhost:${PORT}`))
