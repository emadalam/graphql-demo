import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import {
    mergeTypes,
    mergeResolvers,
    fileLoader
} from 'merge-graphql-schemas';

const typeDefsPath = path.join( __dirname, './types' );
const resolversPath = path.join( __dirname, './resolvers/**/*.resolver.js' );

// load all schema definitions
const typeDefsArray = fileLoader( typeDefsPath,
{
    extensions : [ '.gql' ],
    recursive : true
} );

// load all resolvers
const resolversArray = fileLoader( resolversPath,
{
    extensions : [ '.js' ],
    recursive : true
} );

// merge all type definitions
const typeDefs = mergeTypes( typeDefsArray );

// merge all resolvers
const resolvers = mergeResolvers( resolversArray )

// create schema with their resolvers
export default makeExecutableSchema( { typeDefs, resolvers } );
