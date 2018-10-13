const express = require('express');
const routes = require('./routes/routes');

const port = process.env.PORT || 3000;
const app = express();

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('The express-football-api is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
