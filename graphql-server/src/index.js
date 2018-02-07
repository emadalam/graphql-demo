import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

// for creating the subscription server
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

// import the final schema definitions including the resolvers
import schema from './schema';

// app configs
const PORT = 3001;
const WS_PORT = 5000;
const HOSTNAME = '127.0.0.1';

// endpoint configs
const graphqlEndpoint = '/graphql';
const graphiqlEndpoint = '/graphiql';
const subscriptionsEndpoint = `ws://${HOSTNAME}:${WS_PORT}`

// create WebSocket server
const appWS = createServer( (request, response ) =>
{
    response.writeHead( 404 );
    response.end();
} );

// create subscription server
const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: appWS, path: '/' }
);

// initialize WebSocket server
appWS.listen( WS_PORT, HOSTNAME, () =>
{
    console.log( `subscription server started at ${subscriptionsEndpoint}` );
} );

const app = new koa();
const router = new koaRouter();
router.post( graphqlEndpoint, koaBody(), graphqlKoa( { schema } ) );
router.get( graphiqlEndpoint, graphiqlKoa( {
    endpointURL : graphqlEndpoint,
    subscriptionsEndpoint
} ) );
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
