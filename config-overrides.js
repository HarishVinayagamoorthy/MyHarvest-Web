// const { addWebpackAlias, override } = require("customize-cra");
// const path = require("path");

// module.exports = override(
//   addWebpackAlias({
//     "@src": path.resolve(__dirname, "src"),
//   })
// );

const { useBabelRc, override } = require("customize-cra");
module.exports = override(useBabelRc());
