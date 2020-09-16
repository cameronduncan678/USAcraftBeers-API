const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getAllBeers');
var SQL = require('../SQL/getBeersByStyle');

//SQL query
function query(style) {
  SQL = SQL.replace('£STYLE£', "'" + style + "'");
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
router.route('/:style').get(async (req, res) => {
  try {
    style = req.params.style;
    model.data.beers = await query(style);
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
