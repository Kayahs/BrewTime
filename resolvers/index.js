const queryResolvers = require("./query/queryResolvers")
const mutationResolvers = require("./mutation/mutationResolvers")
const breweryResolvers = require("./brewery/breweryResolvers")

module.exports = {
  ...queryResolvers,
  ...mutationResolvers,
  ...breweryResolvers
}
