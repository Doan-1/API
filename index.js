const express = require('express');

const cors = require('cors')
const app = express();
const port = 4001;

const db = require('./Config/db');
const productrouter = require('./routers/Product.Router');
const userrouter = require('./routers/User.Router');
const commnetrouter = require('./routers/Comment.Router');

db.connect();
app.use(cors())
app.use(express.json());
productrouter(app);
userrouter(app);
commnetrouter(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);