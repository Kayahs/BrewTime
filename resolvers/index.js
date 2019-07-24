const queryResolvers = require("./query/queryResolvers")
const mutationResolvers = require("./mutation/mutationResolvers")

module.exports = {
  ...queryResolvers,
  ...mutationResolvers
}
