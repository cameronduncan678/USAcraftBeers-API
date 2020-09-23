const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getBeerById');
var SQL = require('../SQL/getbeerById');

//SQL query
function query(id) {
  newSQL = SQL.replace('£ID£', id);
  return new Promise((resolve, reject) => {
    conn.query(newSQL, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result[0]);
    });
  });
}

//API route controller
router.route('/:id').get(async (req, res) => {
  try {
    var id = req.params.id;
    model.data.id = id;
    model.data.beer = await query(id);
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
