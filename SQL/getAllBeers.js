const fs = require('fs');
const path = require('path');

const sqlPath = __dirname + '\\' + 'getAllBeers.sql';

const SQL = fs.readFileSync(sqlPath, 'utf8', (err, buf) => {
  return buf.toString();
});

module.exports = SQL;
