require('dotenv').config()

module.exports = function () {
  // eslint-disable-next-line no-undef
  return process.env.STATIC_PATH
}
