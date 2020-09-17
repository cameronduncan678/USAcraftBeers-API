const express = require('express');
const dotEnv = require('dotenv');

const app = express();

app.use(express.json());

dotEnv.config({ path: './config/config.env' });

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use('/api', require('./Routes/GETmeta'));
app.use('/api/allbeers', require('./Routes/GETallBeers'));
app.use('/api/allbreweries', require('./Routes/GETallBreweries'));
app.use('/api/beersbystyle', require('./Routes/GETbeersByStyle'));
app.use('/api/brewery', require('./Routes/GETbreweryById'));

app.listen(PORT, () => {
  console.log(`Server running in mode: ${NODE_ENV}\n`);
  console.log(`Server running on: http://localhost:${PORT}\n`);
});
