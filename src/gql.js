const {
    GraphQLServer
} = require('graphql-yoga');
const fetch = require("node-fetch");


const typeDefs = `
type Query {
    getJoke: Joke
 }
type Joke {
    Opener: String
    Punchline: String
    ProcessingTime: String 
}
  
 
`
const baseURL = "http://dadjokes.online/"
const resolvers = {
    Query: {

        getJoke: async (_) => {
            const response = await fetch(`${baseURL}`)
            const joke = await response.json()
            //console.log(joke)
            return joke.Joke;
        }
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log('Server is running on http://localhost:4000'))