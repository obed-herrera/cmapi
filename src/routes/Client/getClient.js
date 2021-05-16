const express = require('express');
const app = express();
const router = express.Router();
const mysqlConnection = require('../../database');
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

router.get('/Client/getClient', (req, res)=>{  
    mysqlConnection.query('SELECT id as value, concat(first_name," ", last_name," ", secondary_last_name) as label FROM credi_client ', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports = router;