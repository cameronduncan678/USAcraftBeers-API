const metadata = require('../Meta/meta');

var model = {
  success: true,
  status: 200,
  meta: metadata,
  data: {
    beers: [],
  },
};

module.exports = model;
