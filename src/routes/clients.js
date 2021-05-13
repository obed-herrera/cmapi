const express = require('express');
const app = express();
const router = express.Router();

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});  

const mysqlConnection = require('../database');

router.get('/clients', (req, res)=>{  
    mysqlConnection.query('SELECT * FROM credi_client', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/clients', (req, res)=>{
    const{
        first_name,
        mid_name,
        last_name,
        secondary_last_name,
        national_id,
        sys_code,
        phone,
        status_id
    } = req.body;
    mysqlConnection.query('INSERT INTO `credi_client`(`first_name`, `mid_name`, `last_name`, `secondary_last_name`, `national_id`, `sys_code`, `phone`, `status_id`) VALUES (first_name, mid_name, last_name, secondary_lasT_name, national_id, sys_code, phone, status_id)', [first_name, mid_name, last_name, secondary_last_name, national_id, sys_code, phone, status_id]);
})

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