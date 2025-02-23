import { createServer } from 'http'
import Websocket from './modules/websocket/websocket'
import dotenv from 'dotenv'

dotenv.config()

import 'reflect-metadata'

import {
   createExpressServer,
   RoutingControllersOptions
} from 'routing-controllers'

const port = process.env.APP_PORT ?? 4003

const routingControllerOptions: RoutingControllersOptions = {
   routePrefix: 'v1',
   controllers: [ `${__dirname}/modules/http/*.controller.*` ],
   validation: true,
   classTransformer: true,
   cors: true,
   defaultErrorHandler: true
}

const app = createExpressServer(routingControllerOptions)
const httpServer = createServer(app)
const io = Websocket.getInstance(httpServer)

httpServer.listen(port, () => {
   console.log(`Notifications service running at http://localhost:${port}`)
})
