const metadata = require('../Meta/meta');

var model = {
  success: true,
  status: 200,
  meta: 'http://localhost:9001/api',
  host: 'http://localhost:9001/api/brewery/:id',
  data: {
    id: String,
    brewery: Object,
  },
};

module.exports = model;
