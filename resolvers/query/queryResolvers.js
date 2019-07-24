module.exports = {
  Query: {
    async test(parent, args, { postgres }, info) {
      return "Hello World"
    }
  }
}
