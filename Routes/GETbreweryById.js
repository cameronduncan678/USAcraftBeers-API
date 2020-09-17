const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getBreweryById');
var SQL = require('../SQL/getBreweryById');

//SQL query
function query(id) {
  newSQL = SQL.replace('£BREWERYID£', id);
  return new Promise((resolve, reject) => {
    conn.query(newSQL, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
    console.log(SQL);
  });
}

//API route controller
router.route('/:id').get(async (req, res) => {
  try {
    var id = req.params.id;
    model.data.id = id;
    model.data = await query(id);
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
