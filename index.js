const express = require('express');
const app = express();
app.listen(4000, () => console.log('lisenting to port 4000'));
app.use(express.static('public'));

require('dotenv').config();

const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");

const $ = require("jquery")(window);