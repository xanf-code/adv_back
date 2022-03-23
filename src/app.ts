import express from 'express';
import { connect } from './util/connect';

var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3001, async () => {
    console.log("Server is running on port 3001");
    connect();
})