const fs = require('fs');

const sqlPath = __dirname + '\\' + 'getBeerById.sql';

const SQL = fs.readFileSync(sqlPath, 'utf8', (err, buf) => {
  return buf.toString();
});

module.exports = SQL;
