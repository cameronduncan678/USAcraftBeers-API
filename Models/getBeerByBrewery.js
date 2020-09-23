var model = {
  success: true,
  status: 200,
  meta: 'http://localhost:9001/api',
  host: 'http://localhost:9001/api/beerbybrewery/:id',
  data: {
    breweryid: String,
    brewery: String,
    beer: [],
  },
};

module.exports = model;
