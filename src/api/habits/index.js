const express = require('express');
const router = express.Router();

const habit = require('./habit');

router.use('/',habit);

module.exports = router;
