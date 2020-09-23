var model = {
  success: true,
  status: 200,
  meta: 'http://localhost:9001/api',
  host: 'http://localhost:9001/api/brewerybycity/:city',
  data: {
    city: String,
    breweries: [],
  },
};

module.exports = model;
