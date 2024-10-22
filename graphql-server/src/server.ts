import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import Memcached from 'memcached';
import gql from 'graphql-tag';
import resolvers from './resolvers.js';
import { schema } from './schema.js';
import { cacheClient } from './cacheUtil.js';

// schema
const typeDefs = gql(schema);
const cache = { cache: cacheClient }

const server = new ApolloServer<{cache: Memcached}>({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

// start the server
await startStandaloneServer(server, {
    context: async () => cache,
    listen: { port: 4000 },
});
console.log('Running a GraphQL API Server at http://localhost:4000/graphql')


