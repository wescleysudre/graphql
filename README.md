# GraphQL Application Example

This is a simple application using node.js and GraphQL just to test how we can write Queries and mutations.

## Configs

1. First you'll need to restore the dependecies libraries.

Using npm:
```bash
npm install
```
or yarn
```bash
yarn install
```

2. In this example, I'm using mongodb to store data. So, you'll need to configure your MONGO_URL in a ***.env*** file, just like in ***.env.example file***

## Run the app
1. After config you can just run the application using the following:

```bash
node src/server.js
```

2. Now just open your web browser and type the following URL:
<http://localhost:4000>

And that's it.

## GraphQL Schema example

```graphql
module.exports = {
    Query: {
        users: () => (),
        user: () => (),
    },

    Mutation: {
        createUser: () => (),
    },
}
```
