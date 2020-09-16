const metadata = require('../Meta/meta');

var model = {
  success: true,
  status: 200,
  meta: metadata,
  data: {
    breweries: [],
  },
};

module.exports = model;
