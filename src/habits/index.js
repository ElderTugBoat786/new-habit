const express = require('express');

const router = express.Router();


const habit = require('./habit');


router.get('/',(req,res) => {
  res.json({
  })
})
router.use('/',habit);

module.exports = router;
