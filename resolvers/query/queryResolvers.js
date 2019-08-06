module.exports = {
  Query: {
    async getBreweries(parent, args, { postgres }, info) {
      const getBreweriesQuery = {
        text: "SELECT * FROM brewtime.breweries"
      }

      const getBreweriesResult = await postgres.query(getBreweriesQuery)

      return getBreweriesResult.rows
    }
  }
}
