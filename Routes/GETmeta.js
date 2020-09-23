const express = require('express');
const metadata = require('../Meta/meta');

const router = express.Router();

router.route('/').get((req, res) => {
  return res.status(200).json({
    success: true,
    status: 200,
    meta: metadata,
    data: {
      endpoints: [
        { getmeta: 'http://localhost:9001/api' },
        { getallbeers: 'http://localhost:9001/api/allbeers' },
        { beersbystyle: 'http://localhost:9001/api/beersbystyle/cider' },
        { getbeersbybrewery: 'http://localhost:9001/api/beersbybrewery/1' },
        { getbeerbyid: 'http://localhost:9001/api/beer/1' },
        { getallbreweries: 'http://localhost:9001/api/allbreweries' },
        { getbrewerybycity: 'http://localhost:9001/api/brewerycity/Baltimore' },
        { getbrewerybtid: 'http://localhost:9001/api/brewery/0' },
      ],
    },
  });
});

module.exports = router;
