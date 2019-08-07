module.exports = {
  Query: {
    async getBreweries(parent, args, { postgres }, info) {
      const getBreweriesQuery = {
        text: "SELECT * FROM brewtime.breweries"
      }

      const getBreweriesResult = await postgres.query(getBreweriesQuery)

      return getBreweriesResult.rows
    },
    async getBreweryInfo(parent, { input }, { postgres }, info) {
      const getBreweryQuery = {
        text: "SELECT * FROM brewtime.breweries WHERE id = $1",
        values: [input.brewery_id]
      }

      const getBreweryResult = await postgres.query(getBreweryQuery)

      return getBreweryResult.rows[0]
    }
  }
}
