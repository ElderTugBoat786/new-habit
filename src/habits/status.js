const express = require('express');

const router = express.Router();


/*
  se passo dateStart e dateEnd restituisco tutte le
  statistiche per questo periodo
*/
router.get('/',(req,res){
  res.json({

  })
})

/*
  se passo dateStart dateEnd prendo un periodo
  per questo determinato id
*/
router.get('/:id', (req,res){
  res.json({

  })
})
