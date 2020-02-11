const express = require('express');

const router = express.Router();

const db = require('../db');

router.get('/',(req,res) => {
  var sql = "SELECT * FROM habits";
  var params = [];
  db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
})

router.get('/:id', (req,res) => {

  res.json({
    'habit' : {
      'id' : req.params.id
    },
  })
})

router.post('/',(req,res) => {

  var data = {
        name: req.body.name,
        description: req.body.description,
        days : req.body.days,
        created_at : Date.now(),
        modified_at : Date.now()
    }

  var sql ='INSERT INTO habits (name, description, days,created_at, modified_at ) VALUES (?,?,?,?,?)'
  var params =[data.name, data.description, data.days,data.created_at,data.modified_at]

  db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });

})

router.delete('/:id',(req,res)=>{
  res.json({
    'habit' : {
      'id' : req.params.id
    },
  })
})

module.exports = router;
