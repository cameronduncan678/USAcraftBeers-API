const express = require('express');
const metadata = require('../Meta/meta');
const mysql = require('mysql');
const conn = require('../Data/mysql');

const router = express.Router();

//Route Model and SQL code string
var model = require('../Models/getBeerByBrewery');
var brewerySQL = require('../SQL/getBreweryById');
var mainSQL = require('../SQL/getBeersByBreweryId');

//SQL query
function beersQuery(id) {
  newSQL = mainSQL.replace('£BREWERYID£', id);
  return new Promise((resolve, reject) => {
    conn.query(newSQL, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

function breweryQuery(id) {
  newSQL = brewerySQL.replace('£BREWERYID£', id);
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
    model.data.breweryid = id;
    model.data.brewery = await breweryQuery(id);
    model.data.beer = await beersQuery(id);
    res.status(200).json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

module.exports = router;
