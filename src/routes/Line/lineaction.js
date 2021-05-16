const express = require('express');
const app = express();
const router = express.Router();
const insertLineAction = require('./insertLineAction');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  

const mysqlConnection = require('../../database');

router.get('/Line/lineaction', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_line_action', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.post('/Line/lineaction',async function(req, res, next){
    try{
        res.json(await insertLineAction.create(req.body));
    }catch(err){
        console.error('Error al crear la linea', err.message);
        next(err);
    }
});



module.exports = router;