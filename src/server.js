require('dotenv/config');
const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();