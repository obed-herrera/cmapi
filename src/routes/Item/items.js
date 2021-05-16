const express = require('express');
const app = express();
const router = express.Router();
const insertItem = require('./insertitems');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  

const mysqlConnection = require('../../database');

router.get('/Item/items', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_item', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/Item/items',async function(req, res, next){
    try{
        res.json(await insertItem.create(req.body));
    }catch(err){
        console.error('Error al crear el producto', err.message);
        next(err);
    }
});


router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM credi_item WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports = router;