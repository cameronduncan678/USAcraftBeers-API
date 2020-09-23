const metadata = require('../Meta/meta');

var model = {
  success: true,
  status: 200,
  meta: 'http://localhost:9001/api',
  host: 'http://localhost:9001/api/beersbystyle/:style',
  data: {
    style: String,
    beers: [],
  },
};

module.exports = model;
