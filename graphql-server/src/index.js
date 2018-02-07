import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

// import the final schema definitions including the resolvers
import schema from './schema';

// app configs
const app = new koa();
const PORT = 3001;
const HOSTNAME = '127.0.0.1';

// endpoint configs
const graphqlEndpoint = '/graphql';
const graphiqlEndpoint = '/graphiql';


const router = new koaRouter();
router.post( graphqlEndpoint, koaBody(), graphqlKoa( { schema } ) );
router.get( graphiqlEndpoint, graphiqlKoa( { endpointURL : graphqlEndpoint } ) );
app.use( router.routes() );
app.use( router.allowedMethods() );

// initialize the server
app.listen( PORT, HOSTNAME, () =>
{
    const localhost = `http://${HOSTNAME}:${PORT}`;
    console.log( `server started at ${HOSTNAME}:${PORT}` );
    console.log( `GraphQL Endpoint - ${localhost}${graphqlEndpoint}` );
    console.log( `GraphiQL UI - ${localhost}${graphiqlEndpoint}` );
} );
