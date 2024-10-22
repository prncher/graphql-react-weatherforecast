'use strict';
exports.__esModule = true;
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var graphql_tag_1 = require("graphql-tag");
var subgraph_1 = require("@apollo/subgraph");
var resolvers_js_1 = require("./resolvers.js");
var schema_js_1 = require("./schema.js");
// schema
var typeDefs = (0, graphql_tag_1["default"])(schema_js_1.schema);
var server = new server_1.ApolloServer({
    schema: (0, subgraph_1.buildSubgraphSchema)({ typeDefs: typeDefs, resolvers: resolvers_js_1["default"] })
});
// start the server
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 }
})).url;
console.log('Running a GraphQL API Server at http://localhost:4000/graphql');
