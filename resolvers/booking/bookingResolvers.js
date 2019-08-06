module.exports = {
  Booking: {
    async brewery(parent, args, { postgres }, info) {
      const getBreweryQuery = {
        text: "SELECT * FROM brewtime.breweries",
        values: [parent.brewery_id]
      }

      const getBreweryResult = await postgres.query(getBreweryQuery)

      return getBreweryResult.rows[0]
    }
  }
}
