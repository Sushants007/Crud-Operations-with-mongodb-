import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
const cors = Cors()// cors lets us send request from a different server to a different server.. In other terms it handles cross-origin requests. Basically when the frontend will send request to backend then this will handle it  so that we do not get any errors

const apolloServer = new ApolloServer({typeDefs,resolvers})// server apollo server but using queries using prisma client

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}