require("dotenv").config();

module.exports = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
