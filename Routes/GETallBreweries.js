const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getAllBrewery');
const SQL = require('../SQL/getAllBrewery');

//SQL query
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

//API route controller
router.route('/').get(async (req, res) => {
  try {
    model.data.breweries = await query();
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
