module.exports = {
  Brewery: {
    async descriptions(parent, args, { postgres }, info) {
      const getDescriptionsQuery = {
        text: "SELECT * FROM brewtime.descriptions WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getDescriptionsResult = await postgres.query(getDescriptionsQuery)

      return getDescriptionsResult.rows
    },
    async locations(parent, args, { postgres }, info) {
      const getLocationsQuery = {
        text: "SELECT * FROM brewtime.locations WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getLocationsResult = await postgres.query(getLocationsQuery)

      return getLocationsResult.rows
    },
    async bookings(parent, args, { postgres }, info) {
      const getBookingsQuery = {
        text: "SELECT * FROM brewtime.bookings WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getBookingsResult = await postgres.query(getBookingsQuery)

      return getBookingsResult.rows
    },
    async images(parent, args, { postgres }, info) {
      const getImagesQuery = {
        text: "SELECT * FROM brewtime.images WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getImagesResult = await postgres.query(getImagesQuery)

      return getImagesResult.rows
    },
    async products(parent, args, { postgres }, info) {
      const getProductsQuery = {
        text: "SELECT * FROM brewtime.products WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getProductsResult = await postgres.query(getProductsQuery)

      return getProductsResult.rows
    }
  }
}
