import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Facebook({
            clientId: '682072325996352',
            clientSecret: '280829451274afbd427358257b686e07'
        })
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.MONGO_URL,
}

export default (req, res) => NextAuth(req, res, options)