const { gql } = require("apollo-server-express")

module.exports = gql`
  type Query {
    getBreweries: [Brewery]!
  }

  type Mutation {
    test: String!
  }

  type Brewery {
    id: ID!
    name: String!
    description: String!
    locations: [Location]!
    bookings: [Booking]!
    images: [Image]!
    products: [Product]!
  }

  type Location {
    id: ID!
    address: String!
    description: String
    type: String!
    brewery: Brewery!
  }

  type Booking {
    id: ID!
    title: String!
    description: String!
    location: Location!
    guide: String!
    time: String!
    brewery: Brewery!
  }

  type Image {
    id: ID!
    uri: String!
    description: String!
    width: Int!
    height: Int!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    price: Int!
    brewery: Brewery
  }
`
