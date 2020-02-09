const express = require('express');

const router = express.Router();


router.get('/:id', (req,res) => {

  res.json({
    'habit' : {
      'id' : req.params.id
    },
  })
})

router.post('/:id',(req,res) => {
  res.json({
    'habit' : {
      'id' : req.params.id
    },
  })
})

router.delete('/:id',(req,res)=>{
  res.json({
    'habit' : {
      'id' : req.params.id
    },
  })
})

module.exports = router;
