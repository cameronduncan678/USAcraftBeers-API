const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getBreweryByCity');
var SQL = require('../SQL/getBreweryByCity');

//SQL query
function query(city) {
  var newSQL = SQL.replace('£CITY£', "'" + city + "'");
  return new Promise((resolve, reject) => {
    conn.query(newSQL, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

//API route controller
router.route('/:city').get(async (req, res) => {
  try {
    city = req.params.city;
    model.data.city = city;
    model.data.breweries = await query(city);
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
