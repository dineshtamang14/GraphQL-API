const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }

        type RootMutation {
            createEvent(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    // resolver is a function that takes the request and returns a response
    rootValue: {
        events: () => {
            return ["Eat", "Sleep", "Code", "repeat"];
        },
        createEvent: (args) => {
            return args.name;
        }
    },
    graphiql: true
}));


app.listen(port, () => console.log(`Listening on port ${port}`));
