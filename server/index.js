require('dotenv').config()

const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require('cors')
const router = require('./routes/index')

app.use(express.json());
app.use(cors())
app.use('/', router);

app.listen(port, () => {
  console.log(`  Listening on port ${port}`);
});
