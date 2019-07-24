const { gql } = require("apollo-server-express")

module.exports = gql`
  type Query {
    test: String!
  }

  type Mutation {
    test: String!
  }
`
