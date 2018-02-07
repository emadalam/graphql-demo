# graphql-demo
A demo [GraphQL](http://graphql.org/) application server.

### Getting Started

Assuming that you have [nodejs](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine, do the following to get started:

```shell
$ npm install                           # Install dependencies
$ npm run build                         # Builds the app
$ npm start                             # Starts GraphQL app server
```

### GraphiQL Interface
Once the server has been started the [GraphiQL](https://github.com/graphql/graphiql) interface can be accessed at http://127.0.0.1:3001/graphiql to play around with the server.

### Development

```shell
$ npm run dev
```
Starts the GraphQL server and watch for changes inside `graphql-server/src` folder. By default the webserver starts at port 3001 and can be accessed at http://127.0.0.1:3001/graphql.

### Accessing Presentation

```shell
$ npm run presentation
```
Navigate to http://127.0.0.1:8515 to access the presentation slides.

### License
[MIT License](http://opensource.org/licenses/MIT).
