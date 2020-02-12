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

  var sql ='SELECT * FROM habits WHERE id = ?'
  var params =[req.params.id]

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
  var sql ='DELETE FROM habits WHERE id = ?'
  var params =[req.params.id]

  db.run(sql, params, (err, result) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":result ? 'true' : 'false'
        })
      });
})

router.patch('/:id',(req,res)=>{

  var id = req.params.id ? req.params.id : null
  var data = {
        name: req.body.name ? req.body.name : null,
        description: req.body.description ? req.body.description : null,
        days : req.body.days ? req.body.days : null,
    }

  var sql = "UPDATE habits SET"


  param = [];
  for (var x in data) {
    if (data[x] != null) {
      sql += " "+x+" = ? , "
      param.push(data[x])
    }
  }

  sql += ' modified_at = ? WHERE id = ?'
  param.push(Date.now());

  if (id != null) {
    param.push(id);
  }

  db.run(sql, param, (err) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
        })
      });
})

module.exports = router;
