const uuid = require("uuid");

const getSecret = (info) => {
  return uuid.v7() + info;
};

module.exports = getSecret;
