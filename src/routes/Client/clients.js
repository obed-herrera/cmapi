const express = require('express');
const app = express();
const router = express.Router();
const insertClient = require('./insertclients');
const getClient = require('./getClient');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'https://credimarketnic.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  


const mysqlConnection = require('../../database');

router.get('/Client/clients', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_client', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});



router.post('/Client/clients',async function(req, res, next){
    try{
        res.json(await insertClient.create(req.body));
    }catch(err){
        console.error('Error al crear el cliente', err.message);
        next(err);
    }
});

router.put('/:id', async function(req, res, next){
    try{
        res.json(await client.update(req.params.id, req.body));
    }catch(err){
        console.error(`Error al tratar de actualizar al cliente`, err.message);
        next(err);
    }
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM credi_client WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports = router;