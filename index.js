const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 4001;

const db = require('./Config/db');
const productrouter = require('./routers/Product.Router');

db.connect();
app.use(cors())
app.use(express.json());
productrouter(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);