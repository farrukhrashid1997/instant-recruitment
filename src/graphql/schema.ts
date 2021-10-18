import { buildSchema } from "graphql";

export default buildSchema(`
    type RootQuery {
        hello: String!
    }
    schema {
        query: RootQuery
    }

`);
