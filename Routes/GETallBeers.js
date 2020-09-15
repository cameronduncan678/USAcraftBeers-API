const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

var model = require('../Models/getAllBeers');

const router = express.Router();

const SQL = 'SELECT name, id, style, brewery_id, ounces FROM beers ORDER BY id';

function query() {
  return new Promise((resolve, reject) => {
    conn.query(SQL, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

router.route('/').get(async (req, res) => {
  try {
    model.data.beers = await query();
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
