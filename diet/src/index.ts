import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dotenv from 'dotenv'

dotenv.config()

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server)
  console.log(`Apollo GraphQL server is running at ${url}`)
}

startApolloServer()
