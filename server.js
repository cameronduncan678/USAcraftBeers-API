const express = require('express');

const app = express();

app.use(express.json());

const PORT = 9001;
const NODE_ENV = 'Development';

app.use('/api', require('./Routes/GETmeta'));

app.listen(PORT, () => {
  console.log(`Server running in mode: ${NODE_ENV}\n`);
  console.log(`Server running on: http://localhost:${PORT}\n`);
});
