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
        { getallbeers: 'http://localhost:9001/api/getallbeers' },
      ],
    },
  });
});

module.exports = router;
