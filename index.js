require('dotenv').config();
const express = require('express');
const exStatic = require('express-static');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(exStatic('./'));

app.listen(PORT, () => console.log(`capatain Teemo on ${PORT}`));