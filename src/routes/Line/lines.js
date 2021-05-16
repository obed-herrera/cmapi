const express = require('express');
const app = express();
const router = express.Router();
const insertLine = require('./insertline');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  

const mysqlConnection = require('../../database');

router.get('/Line/lines', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_line', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.post('/Line/lines',async function(req, res, next){
    try{
        res.json(await insertLine.create(req.body));
    }catch(err){
        console.error('Error al crear la linea', err.message);
        next(err);
    }
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM credi_line WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;