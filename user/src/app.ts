import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT ?? 4000

app.get('/', (req: Request, res: Response) => {
    res.send('User service running')
})

app.listen(PORT, () => console.log(`User service running at http://localhost:${PORT}`))
