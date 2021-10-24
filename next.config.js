require("dotenv").config();

module.exports = {
  env: {
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
